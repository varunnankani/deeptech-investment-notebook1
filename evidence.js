const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
let activeType = 'all';
let searchTerm = '';

function renderEvidence(){
  const types = ['all','fact','assumption','thesis','risk'];
  $('#evidenceFilters').innerHTML = types.map(v=>`<button class="filter ${v===activeType?'active':''}" data-type="${v}">${v}</button>`).join('');
  const q = searchTerm.toLowerCase();
  const rows = notebookData.evidence.filter(x => (activeType==='all'||x.type===activeType) && (!q || `${x.company} ${x.claim} ${x.quality}`.toLowerCase().includes(q)));
  $('#evidenceList').innerHTML = rows.length ? rows.map(x => {
    const s = x.source && notebookData.sources[x.source];
    return `<article class="evidence-item">
      <div class="evidence-main"><span class="pill ${x.type}">${x.type}</span><p><b>${x.company}</b> · ${x.claim}</p></div>
      <div class="evidence-meta"><span>${x.quality}</span>${s ? `<a href="${s.url}" target="_blank" rel="noreferrer">${esc(s.title)} ↗</a>` : '<em>Primary diligence required</em>'}</div>
    </article>`;
  }).join('') : `<div class="empty-state">No claims match this filter.</div>`;
  $$('.filter').forEach(b=>b.addEventListener('click',()=>{activeType=b.dataset.type;renderEvidence();}));
}

function renderSources(){
  $('#sourceGrid').innerHTML = Object.entries(notebookData.sources).map(([id,s])=>`
    <a class="source" href="${s.url}" target="_blank" rel="noreferrer">
      <span class="source-kind">${s.kind}</span>
      <b>${s.title} ↗</b>
      <small>${s.note}</small>
      <code>${id}</code>
    </a>`).join('');
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

document.addEventListener('DOMContentLoaded',()=>{
  renderEvidence();
  renderSources();
  bindTheme();
  $('#evidenceSearch').addEventListener('input',e=>{searchTerm=e.target.value.trim();renderEvidence();});
});
