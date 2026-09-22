const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

let activeCompany = 'octobotics';
let activeCompetition = 'octobotics';
let activeChallenge = notebookData.challenges[0].id;
let assistantBackend = false;

function sourceLinks(ids = [], compact = false){
  if(!ids.length) return '';
  return `<div class="inline-sources ${compact ? 'compact' : ''}">${ids.map(id => {
    const s = notebookData.sources[id];
    if(!s) return '';
    return `<a href="${s.url}" target="_blank" rel="noreferrer" title="${esc(s.note)}">${esc(s.title)} ↗</a>`;
  }).join('')}</div>`;
}

function renderThesis(){
  $('#thesisHeadline').textContent = notebookData.thesis.headline;
  $('#thesisClosing').textContent = notebookData.thesis.closing;
  $('#inflectionGrid').innerHTML = notebookData.thesis.inflections.map(x => `
    <article class="inflection thesis-inflection">
      <div class="num">${x.number}</div>
      <h3>${x.title}</h3>
      <p>${x.body}</p>
      ${sourceLinks(x.sourceIds, true)}
    </article>`).join('');
}

function renderFlows(){
  $('#flowBoard').innerHTML = notebookData.commonFlow.map(row => `
    <article class="flow-row ${row.key}">
      <div class="flow-company ${row.key}">
        <b>${row.company}</b>
        <small>${row.kicker}</small>
      </div>
      <div class="flow-steps">${row.steps.map(step => `<div class="flow-step">${step}</div>`).join('')}</div>
      <div class="flow-test"><small>VENTURE-SCALE TEST</small><b>${row.test}</b></div>
    </article>`).join('');
}

function renderCompany(key){
  activeCompany = key;
  const c = notebookData.companies[key];
  document.documentElement.style.setProperty('--accent', c.accent);

  $('#companyView').innerHTML = `
    <article class="company-shell" style="--company-accent:${c.accent}">
      <div class="company-summary">
        <div class="company-summary-main">
          <span class="kicker">${c.category}</span>
          <div class="company-title-row"><h3>${c.name}</h3><span class="status-badge">${c.status}</span></div>
          <p class="company-one-line">${c.oneLine}</p>
          <p class="company-thesis">${c.thesis}</p>
          <span class="rdi-chip">${c.rdi}</span>
        </div>
        <aside class="company-scorecard">
          <div class="score-row"><small>Stage</small><b>${c.stage}</b></div>
          <div class="score-row"><small>Metric I would watch</small><b>${c.metric}</b><span>${c.metricWhy}</span></div>
          <div class="score-row"><small>Near-term catalyst</small><b>${c.catalyst}</b></div>
          <div class="score-row danger"><small>Kill condition</small><b>${c.kill}</b></div>
        </aside>
      </div>

      <div class="company-sections">
        ${c.sections.map((s,i)=>`
          <article class="company-section ${i===0?'open':''}" data-company-section="${i}">
            <button class="section-toggle" type="button">
              <div><span>${s.label}</span><h4>${s.title}</h4></div><i>+</i>
            </button>
            <div class="section-body"><p>${s.body}</p>${sourceLinks(s.sourceIds, true)}</div>
          </article>`).join('')}
      </div>

      <div class="customer-panel">
        <div class="customer-panel-head"><span class="kicker">WHO PAYS</span><h4>Likely customer base</h4></div>
        <div class="customer-grid">${c.customers.map(x=>`<div class="customer"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div>
      </div>
    </article>`;

  $$('[data-company-section] .section-toggle').forEach(btn => btn.addEventListener('click', () => {
    btn.closest('.company-section').classList.toggle('open');
  }));
  $$('.seg').forEach(b => b.classList.toggle('active', b.dataset.company === key));
}

function threatClass(v){ return v.toLowerCase().replace(/[^a-z]+/g,'-').replace(/^-|-$/g,''); }
function renderCompetition(key = activeCompetition){
  activeCompetition = key;
  const c = notebookData.companies[key];
  $('#competitionGrid').innerHTML = c.competitors.map(x => `
    <article class="competitor">
      <div class="competitor-head"><div><b>${x.name}</b><small>${x.type}</small></div><span class="threat ${threatClass(x.threat)}">${x.threat}</span></div>
      <div class="competitor-block"><span>WHY IT MATTERS</span><p>${x.why}</p></div>
      <div class="competitor-block response"><span>WHAT MUST BE TRUE</span><p>${x.response}</p></div>
    </article>`).join('');
  $$('[data-comp-company]').forEach(b => b.classList.toggle('active', b.dataset.compCompany === key));
}

function renderChallengeRail(){
  $('#challengeRail').innerHTML = notebookData.challenges.map(x => `
    <button class="challenge-tab ${x.id===activeChallenge?'active':''}" data-challenge="${x.id}">
      <small>${x.company} · ${x.severity}</small><b>${x.title}</b>
    </button>`).join('');
  $$('.challenge-tab').forEach(b => b.addEventListener('click', () => {
    activeChallenge = b.dataset.challenge;
    renderChallengeRail();
    renderChallengeStage();
  }));
}

function renderChallengeStage(){
  const x = notebookData.challenges.find(c => c.id === activeChallenge) || notebookData.challenges[0];
  $('#challengeStage').innerHTML = `
    <div class="challenge-stage-head">
      <div><span class="kicker">${x.company}</span><h3>${x.title}</h3></div>
      <span class="severity">${x.severity}</span>
    </div>
    <div class="challenge-columns">
      <div class="challenge-block bear"><span>THE BEAR CASE</span><p>${x.bear}</p></div>
      <div class="challenge-block answer"><span>MY CURRENT RESPONSE</span><p>${x.response}</p></div>
      <div class="challenge-block falsifier full"><span>WHAT WOULD CHANGE MY MIND</span><p>${x.falsifier}</p></div>
    </div>`;
}

function renderFounder(){
  const make = (key,label) => {
    const c = notebookData.companies[key];
    return `<article class="founder-card"><div class="founder-head"><span>${label}</span><b>30-minute founder room</b></div>
      ${c.founderQuestions.map((x,i)=>`<div class="founder-q"><div class="rank">${String(i+1).padStart(2,'0')}</div><div><b>${x[0]}</b><span>${x[1]}</span></div></div>`).join('')}
    </article>`;
  };
  $('#founderGrid').innerHTML = make('octobotics','Octobotics') + make('piersight','PierSight');
}

function bindCalcs(){
  ['octoInspections','octoTicket','octoEngineers','pierSats','pierCustomers','pierAcv'].forEach(id => $('#'+id)?.addEventListener('input',updateCalcs));
  updateCalcs();
}

function updateCalcs(){
  if(!$('#octoInspections')) return;
  const oi=+$('#octoInspections').value, ot=+$('#octoTicket').value, oe=+$('#octoEngineers').value;
  $('#octoInspectionsOut').textContent=oi; $('#octoTicketOut').textContent=ot; $('#octoEngineersOut').textContent=oe;
  const or=oi*ot/oe;
  $('#octoMetric').textContent=`₹${or.toFixed(1)}L`;
  $('#octoInterpretation').textContent = or>=12 ? 'Stronger operating leverage: inspection output is beginning to outrun field labour.' : or>=7 ? 'Promising, but still sensitive to utilisation, travel and team intensity.' : 'Services-heavy economics: more revenue likely still needs proportionate labour.';

  const ps=+$('#pierSats').value, pc=+$('#pierCustomers').value, pa=+$('#pierAcv').value;
  $('#pierSatsOut').textContent=ps; $('#pierCustomersOut').textContent=pc; $('#pierAcvOut').textContent=pa;
  const pr=pc*pa/ps;
  $('#pierMetric').textContent=`$${Math.round(pr)}k`;
  $('#pierInterpretation').textContent = pr>=600 ? 'Strong multi-tenant economics: intelligence monetisation is outrunning satellite count.' : pr>=250 ? 'Potentially attractive if retention and gross margin are genuinely software-like.' : 'Hardware-led economics: customer / revenue density per satellite is still too low.';
}

function tokens(s){
  const stop = new Set(['what','does','this','that','with','from','have','would','could','their','about','your','into','more','than','they','them','which','why','how','the','and','for','are','was','were','who','when','where','should','just','isnt','is']);
  return (String(s).toLowerCase().match(/[a-z0-9]+/g)||[]).filter(x => x.length>2 && !stop.has(x));
}
function score(q,item){
  const qs = new Set(tokens(q));
  const hay = tokens(`${item.tags} ${item.text} ${item.company}`);
  let n = 0;
  hay.forEach(t => {
    if(qs.has(t)) n += 2;
    if([...qs].some(x => x.length>4 && (t.includes(x)||x.includes(t)))) n += .35;
  });
  if(String(q).toLowerCase().includes(item.company.toLowerCase())) n += 2;
  return n;
}
function localRetrieve(q){
  return notebookData.corpus.map(x => [score(q,x),x]).sort((a,b)=>b[0]-a[0]).filter(x=>x[0]>0).slice(0,4);
}
function localAnswer(q){
  const ranked = localRetrieve(q);
  if(!ranked.length) return {answer:"I don't have enough research-backed evidence in the curated corpus to answer that confidently. I would leave it as an unresolved diligence question rather than fill the gap with generic knowledge.", sources:[], mode:'local'};
  const primary = ranked[0][1];
  const supporting = ranked.slice(1,3).map(x=>x[1]);
  const answer = [primary.text, ...supporting.map(x=>x.text)].join(' ');
  const srcIds = [...new Set(ranked.flatMap(x=>x[1].sources))];
  return {answer, sources:srcIds.map(id=>({id,...notebookData.sources[id]})).filter(x=>x.title), mode:'local', evidenceType:primary.type};
}

function linkifyCitations(text, sources){
  let out = esc(text).replace(/\n/g,'<br/>');
  (sources||[]).forEach((s,i)=>{
    const rx = new RegExp(`\\[${i+1}\\]`,'g');
    out = out.replace(rx, `<a class="inline-cite" href="${s.url}" target="_blank" rel="noreferrer">[${i+1}]</a>`);
  });
  return out;
}

async function checkAssistantMode(){
  try{
    const r = await fetch('/api/health', {cache:'no-store'});
    if(r.ok){
      const j = await r.json();
      assistantBackend = !!j.llm;
    }
  }catch(_){ assistantBackend = false; }
  $('#assistantMode').textContent = assistantBackend ? 'LLM + grounded retrieval active' : 'GitHub Pages mode: local retrieval fallback';
  document.querySelector('.status-dot')?.classList.toggle('live', assistantBackend);
}

async function askResearch(q){
  if(assistantBackend){
    try{
      const r = await fetch('/api/ask', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q})});
      if(r.ok) return await r.json();
    }catch(_){ /* fallback below */ }
  }
  return localAnswer(q);
}

function addMsg(role, html){
  const el = document.createElement('div');
  el.className = `msg ${role}`;
  el.innerHTML = `<div class="avatar">${role==='user'?'Y':'R'}</div><div class="bubble">${html}</div>`;
  $('#chatLog').appendChild(el);
  $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
  return el;
}

function renderAnswer(result){
  const sources = result.sources || [];
  const badge = result.mode === 'llm' ? 'GROUNDED LLM' : (result.evidenceType ? result.evidenceType.toUpperCase() : 'LOCAL RETRIEVAL');
  const sourceHtml = sources.length ? `<div class="citation-row">${sources.map((s,i)=>`<a href="${s.url}" target="_blank" rel="noreferrer">[${i+1}] ${esc(s.title)} ↗</a>`).join('')}</div>` : '';
  return `<span class="answer-label">${badge}</span><p>${linkifyCitations(result.answer || '', sources)}</p>${result.unresolved ? `<div class="unresolved"><b>Unresolved diligence:</b> ${esc(result.unresolved)}</div>` : ''}${sourceHtml}`;
}

function renderSuggestions(){
  $('#suggestions').innerHTML = notebookData.suggestions.map(s => `<button class="suggestion">${s}</button>`).join('');
  $$('.suggestion').forEach(b => b.addEventListener('click', () => { $('#chatInput').value = b.textContent; $('#chatForm').requestSubmit(); }));
}

function bindChat(){
  $('#chatForm').addEventListener('submit', async e=>{
    e.preventDefault();
    const q = $('#chatInput').value.trim();
    if(!q) return;
    addMsg('user', `<p>${esc(q)}</p>`);
    $('#chatInput').value='';
    const pending = addMsg('assistant', `<span class="answer-label">RESEARCHING</span><p class="typing">Reading the curated evidence…</p>`);
    const result = await askResearch(q);
    pending.querySelector('.bubble').innerHTML = renderAnswer(result);
  });
}

function bindTheme(){
  const stored = localStorage.getItem('theme');
  if(stored) document.documentElement.dataset.theme = stored;
  $('#themeToggle').addEventListener('click',()=>{
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme',next);
  });
}

function init(){
  renderThesis();
  renderFlows();
  renderCompany(activeCompany);
  renderCompetition(activeCompetition);
  renderChallengeRail();
  renderChallengeStage();
  renderFounder();
  renderSuggestions();
  bindChat();
  bindCalcs();
  bindTheme();
  checkAssistantMode();

  $$('.seg').forEach(b=>b.addEventListener('click',()=>renderCompany(b.dataset.company)));
  $$('[data-comp-company]').forEach(b=>b.addEventListener('click',()=>renderCompetition(b.dataset.compCompany)));
}

document.addEventListener('DOMContentLoaded',init);
