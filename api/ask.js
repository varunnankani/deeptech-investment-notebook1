const fs = require('fs');
const path = require('path');

const STOP = new Set(['what','does','this','that','with','from','have','would','could','their','about','your','into','more','than','they','them','which','why','how','the','and','for','are','was','were','who','when','where','should','just','isnt','is','can','will']);

function tokens(s){
  return (String(s).toLowerCase().match(/[a-z0-9]+/g)||[]).filter(x => x.length > 2 && !STOP.has(x));
}
function score(q,item){
  const qs = new Set(tokens(q));
  const hay = tokens(`${item.tags||''} ${item.text||''} ${item.company||''} ${item.type||''}`);
  let n = 0;
  for(const t of hay){
    if(qs.has(t)) n += 2;
    for(const x of qs){ if(x.length>4 && (t.includes(x)||x.includes(t))) n += .3; }
  }
  if(String(q).toLowerCase().includes(String(item.company||'').toLowerCase())) n += 2;
  return n;
}
function loadKnowledge(){
  const p = path.join(process.cwd(),'research','knowledge.json');
  return JSON.parse(fs.readFileSync(p,'utf8'));
}
function retrieve(question, knowledge){
  const ranked = knowledge.corpus
    .map(x => ({score:score(question,x), item:x}))
    .sort((a,b)=>b.score-a.score)
    .filter(x=>x.score>0)
    .slice(0,6);
  return ranked;
}
function responseText(data){
  if(typeof data.output_text === 'string' && data.output_text.trim()) return data.output_text.trim();
  const parts=[];
  for(const item of data.output||[]){
    for(const c of item.content||[]){ if(c.type==='output_text' && c.text) parts.push(c.text); }
  }
  return parts.join('\n').trim();
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control','no-store');
  if(req.method !== 'POST') return res.status(405).json({error:'POST only'});
  if(!process.env.OPENAI_API_KEY) return res.status(503).json({error:'LLM backend is not configured'});

  const question = String(req.body?.question || '').trim().slice(0,1200);
  if(!question) return res.status(400).json({error:'Question is required'});

  const knowledge = loadKnowledge();
  const ranked = retrieve(question, knowledge);
  if(!ranked.length){
    return res.status(200).json({
      mode:'llm',
      answer:"The current research corpus does not contain enough evidence to answer that confidently. I would leave it as an unresolved diligence question rather than fill the gap with generic knowledge.",
      sources:[],
      unresolved:"Add primary research before forming a view."
    });
  }

  const sourceIds = [...new Set(ranked.flatMap(r=>r.item.sources||[]))].filter(id=>knowledge.sources[id]);
  const numberedSources = sourceIds.map((id,i)=>({number:i+1,id,...knowledge.sources[id]}));
  const evidence = ranked.map((r,i)=>`E${i+1} | ${r.item.company} | ${r.item.type}\n${r.item.text}\nSource IDs: ${(r.item.sources||[]).join(', ') || 'none'}`).join('\n\n');
  const sourceBlock = numberedSources.map(s=>`[${s.number}] ${s.title} — ${s.url}\n${s.note}`).join('\n\n');

  const instructions = `You are the research assistant for a venture-investment notebook on Octobotics and PierSight.

Rules:
1. Answer ONLY from the supplied research evidence and source register. Do not use outside knowledge, browsing, or invented facts.
2. Separate sourced facts from investor interpretation. Use language such as “the research shows”, “my thesis is”, or “this remains an assumption” where appropriate.
3. Cite factual claims inline using [1], [2], etc. Use only source numbers provided below.
4. If the evidence is insufficient, say so clearly and identify the unresolved diligence question.
5. Be concise but analytical: normally 2–5 short paragraphs.
6. Do not sound promotional. Surface the strongest counterargument when relevant.
7. Never claim a source proves something beyond what the evidence says.
8. The notebook's common thesis is: India's next decade of deep tech will be won by companies that use indigenous hardware to capture difficult physical-world data, then compound it into recurring intelligence.`;

  const input = `QUESTION:\n${question}\n\nRETRIEVED EVIDENCE:\n${evidence}\n\nSOURCE REGISTER:\n${sourceBlock || 'No external source attached to the retrieved thesis/risk notes.'}\n\nAnswer the question. If a claim is an investment inference rather than a sourced fact, label it as such. End with one sentence beginning “Unresolved:” only if meaningful diligence remains.`;

  try{
    const apiRes = await fetch('https://api.openai.com/v1/responses', {
      method:'POST',
      headers:{
        'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
        instructions,
        input,
        store:false,
        max_output_tokens:900
      })
    });
    const data = await apiRes.json();
    if(!apiRes.ok){
      console.error('OpenAI API error', data);
      return res.status(502).json({error:'Research model request failed'});
    }
    let answer = responseText(data);
    let unresolved = '';
    const m = answer.match(/\n?Unresolved:\s*(.+)$/i);
    if(m){ unresolved=m[1].trim(); answer=answer.slice(0,m.index).trim(); }

    return res.status(200).json({
      mode:'llm',
      answer,
      unresolved,
      sources:numberedSources.map(({number,id,title,url,note,kind})=>({number,id,title,url,note,kind}))
    });
  } catch(err){
    console.error(err);
    return res.status(500).json({error:'Unable to run research assistant'});
  }
};
