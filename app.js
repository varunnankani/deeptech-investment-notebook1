const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

let activeCompany = 'octobotics';
let activeCompetition = 'octobotics';
let activeChallenge = notebookData.challenges[0].id;

function renderFlows(){
  $('#flowBoard').innerHTML = notebookData.commonFlow.map(row => `
    <article class="flow-row">
      <div class="flow-company ${row.color}">
        <b>${row.company}</b>
        <small>${row.color === 'octo' ? 'PHYSICAL ACCESS' : 'PHYSICAL OBSERVATION'}</small>
      </div>
      <div class="flow-steps">${row.steps.map(step => `<div class="flow-step">${step}</div>`).join('')}</div>
      <div class="flow-test"><div><b>Venture-scale test</b><br/>${row.test}</div></div>
    </article>`).join('');
}

function renderInflections(){
  $('#inflectionGrid').innerHTML = notebookData.inflections.map((x,i)=>`
    <article class="inflection">
      <div class="num">0${i+1}</div>
      <h3>${x.title}</h3>
      <p>${x.text}</p>
      <div class="signal">${x.signal}</div>
    </article>`).join('');
}

function renderCompany(key){
  activeCompany = key;
  const c = notebookData.companies[key];
  document.documentElement.style.setProperty('--accent', c.accent);
  $('#companyView').innerHTML = `
    <article class="company-hero" style="--accent:${c.accent}">
      <div class="company-top">
        <div class="company-main">
          <span class="kicker">${c.category}</span>
          <div class="company-title-row"><h3>${c.name}</h3><span class="status-badge">${c.status}</span></div>
          <p class="company-one-line">${c.oneLine}</p>
          <p class="thesis">${c.thesis}</p>
          <span class="rdi-chip">RDI · ${c.rdi}</span>
        </div>
        <aside class="company-side">
          <div class="metric"><small>Stage</small><b>${c.stage}</b></div>
          <div class="metric"><small>Metric I would watch</small><b>${c.metric}</b></div>
          <div class="metric"><small>Near-term catalyst</small><b>${c.catalyst}</b></div>
          <div class="metric kill"><small>Kill condition</small><b>${c.kill}</b></div>
        </aside>
      </div>
      <div class="map-grid">
        ${c.map.map((n,i)=>`<button class="map-node ${i===0?'active':''}" data-index="${i}">
          <div class="label">${n.label}</div><h4>${n.title}</h4><p>${n.short}</p>
        </button>`).join('')}
      </div>
      <div class="map-detail"><strong>${c.map[0].title}</strong><p>${c.map[0].detail}</p></div>
      <div class="customer-strip">${c.customers.map(x=>`<div class="customer"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div>
    </article>`;

  $$('.map-node').forEach(n => n.addEventListener('click', () => {
    $$('.map-node').forEach(x => x.classList.remove('active'));
    n.classList.add('active');
    const item = c.map[+n.dataset.index];
    $('.map-detail').innerHTML = `<strong>${item.title}</strong><p>${item.detail}</p>`;
  }));
  $$('.seg').forEach(b => b.classList.toggle('active', b.dataset.company === key));
}

function threatClass(v){ return v.toLowerCase().replace(/\s+/g,'-'); }
function renderCompetition(key = activeCompetition){
  activeCompetition = key;
  const c = notebookData.companies[key];
  $('#competitionGrid').innerHTML = c.competitors.map(x => `
    <article class="competitor">
      <div class="competitor-head"><b>${x.name}</b><small>${x.type}</small></div>
      <span class="threat ${threatClass(x.threat)}">${x.threat} threat</span>
      <p>${x.why}</p>
      <p class="response"><b>What must be true</b><br/>${x.response}</p>
    </article>`).join('');
  $$('[data-comp-company]').forEach(b => b.classList.toggle('active', b.dataset.compCompany === key));
}

function renderEvidence(type='all'){
  const vals = ['all','fact','assumption','thesis','risk'];
  $('#evidenceFilters').innerHTML = vals.map(v=>`<button class="filter ${v===type?'active':''}" data-type="${v}">${v}</button>`).join('');
  const rows = notebookData.evidence.filter(x => type==='all' || x.type===type);
  $('#evidenceList').innerHTML = rows.map(x => {
    const s = x.source && notebookData.sources[x.source];
    return `<article class="evidence-item">
      <span class="pill ${x.type}">${x.type}</span>
      <p><b>${x.company}:</b> ${x.claim}</p>
      <span class="evidence-quality">${x.quality}</span>
      ${s ? `<a href="${s.url}" target="_blank" rel="noreferrer">source ↗</a>` : '<span></span>'}
    </article>`;
  }).join('');
  $$('.filter').forEach(b => b.addEventListener('click', () => renderEvidence(b.dataset.type)));
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

function renderTimeline(){
  const make = (key,label) => `
    <article class="timeline-card"><h3>${label}</h3>
      ${notebookData.timeline[key].map((x,i)=>`<div class="timeline-step"><div class="index">${i+1}</div><p><b>${x[0]}</b><br/>${x[1]}</p></div>`).join('')}
    </article>`;
  $('#timeline').innerHTML = make('octobotics','Octobotics') + make('piersight','PierSight');
}

function renderFounder(){
  const make = (key,label) => {
    const c = notebookData.companies[key];
    return `<article class="founder-card"><h3>${label}</h3><div class="founder-sub">Highest-information questions first</div>
      ${c.founderQuestions.map((x,i)=>`<div class="founder-q"><div class="rank">${i+1}</div><div><b>${x[0]}</b><span>${x[1]}</span></div></div>`).join('')}
    </article>`;
  };
  $('#founderGrid').innerHTML = make('octobotics','Octobotics') + make('piersight','PierSight');
}

function renderSources(){
  $('#sourceGrid').innerHTML = Object.values(notebookData.sources).map(s => `
    <a class="source" href="${s.url}" target="_blank" rel="noreferrer">
      <span class="source-kind">${s.kind}</span><b>${s.title} ↗</b><small>${s.note}</small>
    </a>`).join('');
}

function renderSuggestions(){
  $('#suggestions').innerHTML = notebookData.suggestions.map(s => `<button class="suggestion">${s}</button>`).join('');
  $$('.suggestion').forEach(b => b.addEventListener('click', () => { $('#chatInput').value = b.textContent; $('#chatForm').requestSubmit(); }));
}

function tokens(s){
  const stop = new Set(['what','does','this','that','with','from','have','would','could','their','about','your','into','more','than','they','them','which','why','how','the','and','for','are','was','were','who','when','where']);
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

function answerResearch(q){
  const ranked = notebookData.corpus.map(x => [score(q,x),x]).sort((a,b)=>b[0]-a[0]).filter(x=>x[0]>0).slice(0,3);
  if(!ranked.length) return {
    html:`<span class="answer-label">INSUFFICIENT EVIDENCE</span><p>I don't have a strong research-backed answer to that in the curated corpus yet. I would rather leave it unresolved than fill the gap with generic knowledge.</p>`,
    sources:[]
  };
  const primary = ranked[0][1];
  const supporting = ranked.slice(1).map(x=>x[1]);
  const confidence = ranked[0][0] >= 6 ? 'strong match' : ranked[0][0] >= 3 ? 'moderate match' : 'weak match';
  const html = `<span class="answer-label">${primary.type.toUpperCase()} · ${confidence.toUpperCase()}</span>
    <p>${primary.text}</p>
    ${supporting.length ? `<p style="color:var(--muted)"><b>Related notes:</b> ${supporting.map(x=>x.text).join(' ')}</p>` : ''}`;
  const src = [...new Set(ranked.flatMap(x=>x[1].sources))];
  return {html,sources:src};
}

function addMsg(role, html, sources=[]){
  const el = document.createElement('div');
  el.className = `msg ${role}`;
  el.innerHTML = `<div class="avatar">${role==='user'?'Y':'R'}</div><div class="bubble">${html}${sources.length?`<div class="citation-row">${sources.map(id=>{const s=notebookData.sources[id];return `<a href="${s.url}" target="_blank" rel="noreferrer">${esc(s.title)} ↗</a>`}).join('')}</div>`:''}</div>`;
  $('#chatLog').appendChild(el);
  $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
}

function bindChat(){
  $('#chatForm').addEventListener('submit',e=>{
    e.preventDefault();
    const q = $('#chatInput').value.trim();
    if(!q) return;
    addMsg('user',esc(q));
    $('#chatInput').value='';
    const a = answerResearch(q);
    setTimeout(()=>addMsg('assistant',a.html,a.sources),120);
  });
}

function bindCalcs(){
  ['octoInspections','octoTicket','octoEngineers','pierSats','pierCustomers','pierAcv'].forEach(id => $('#'+id).addEventListener('input',updateCalcs));
  updateCalcs();
}

function updateCalcs(){
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
  renderFlows();
  renderInflections();
  renderCompany(activeCompany);
  renderCompetition(activeCompetition);
  renderEvidence();
  renderChallengeRail();
  renderChallengeStage();
  renderTimeline();
  renderFounder();
  renderSources();
  renderSuggestions();
  bindChat();
  bindCalcs();
  bindTheme();

  $$('.seg').forEach(b=>b.addEventListener('click',()=>renderCompany(b.dataset.company)));
  $$('[data-comp-company]').forEach(b=>b.addEventListener('click',()=>renderCompetition(b.dataset.compCompany)));
}

document.addEventListener('DOMContentLoaded',init);
