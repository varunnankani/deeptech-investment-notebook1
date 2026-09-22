(function () {
  const input = document.getElementById('questionSearch');
  const dropdown = document.getElementById('questionDropdown');
  const answerPanel = document.getElementById('answerPanel');
  const clearButton = document.getElementById('clearQuestion');
  const hint = document.getElementById('questionHint');
  if (!input || !dropdown || !answerPanel || !Array.isArray(window.approvedQuestions || approvedQuestions)) return;

  const questions = window.approvedQuestions || approvedQuestions;
  let selectedId = null;

  function normalise(value) {
    return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokens(value) {
    return normalise(value).split(' ').filter(Boolean);
  }

  function scoreQuestion(item, query) {
    const q = normalise(query);
    if (!q) return 0;
    const haystack = normalise(item.question + ' ' + item.tags.join(' ') + ' ' + item.answer);
    const queryTokens = tokens(q);
    let score = 0;
    if (normalise(item.question).includes(q)) score += 30;
    if (haystack.includes(q)) score += 18;
    queryTokens.forEach((token) => {
      if (normalise(item.question).includes(token)) score += 8;
      if (normalise(item.tags.join(' ')).includes(token)) score += 6;
      if (normalise(item.answer).includes(token)) score += 2;
    });
    return score;
  }

  function tagMarkup(tags) {
    return tags.map((tag) => `<span class="question-tag ${tag.toLowerCase()}">${tag}</span>`).join('');
  }

  function renderDropdown(query) {
    const q = query.trim();
    if (!q) {
      dropdown.hidden = true;
      dropdown.innerHTML = '';
      hint.textContent = 'You must select a question from the dropdown. Free-form questions cannot be submitted.';
      return;
    }

    const matches = questions
      .map((item) => ({ item, score: scoreQuestion(item, q) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.id - b.item.id)
      .slice(0, 7);

    if (!matches.length) {
      dropdown.hidden = false;
      dropdown.innerHTML = '<div class="qa-no-match"><b>No approved question found.</b><span>Try a company, competitor, moat, customer, MATSYA, scaling or risk topic.</span></div>';
      hint.textContent = 'Only one of the 25 approved research questions can be selected.';
      return;
    }

    dropdown.innerHTML = matches.map(({ item }) => `
      <button class="qa-option" type="button" role="option" data-id="${item.id}">
        <span class="qa-option-question">${item.question}</span>
        <span class="qa-option-tags">${tagMarkup(item.tags)}</span>
      </button>
    `).join('');
    dropdown.hidden = false;
    hint.textContent = `${matches.length} reviewed question${matches.length === 1 ? '' : 's'} matched. Select one to view the fixed response.`;
  }

  function renderAnswer(item) {
    selectedId = item.id;
    input.value = item.question;
    dropdown.hidden = true;
    hint.textContent = 'Selected from the approved question set. Type again to choose a different question.';
    answerPanel.classList.remove('empty-answer');
    answerPanel.innerHTML = `
      <div class="answer-head">
        <div><span class="answer-number">Q${String(item.id).padStart(2, '0')}</span><h3>${item.question}</h3></div>
        <div class="answer-tags">${tagMarkup(item.tags)}</div>
      </div>
      <div class="answer-copy"><p>${item.answer}</p></div>
      <div class="answer-foot"><span>FIXED, REVIEWED RESPONSE</span><a href="evidence.html">Check evidence ↗</a></div>
    `;
  }

  input.addEventListener('input', () => {
    selectedId = null;
    renderDropdown(input.value);
  });

  input.addEventListener('focus', () => {
    if (input.value && !selectedId) renderDropdown(input.value);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (selectedId) return;
      const exact = questions.find((item) => normalise(item.question) === normalise(input.value));
      if (exact) renderAnswer(exact);
      else {
        input.classList.add('invalid-input');
        hint.textContent = 'Select one of the approved questions from the dropdown. Free-form submission is disabled.';
        setTimeout(() => input.classList.remove('invalid-input'), 550);
      }
    }
  });

  dropdown.addEventListener('click', (event) => {
    const button = event.target.closest('.qa-option');
    if (!button) return;
    const item = questions.find((question) => question.id === Number(button.dataset.id));
    if (item) renderAnswer(item);
  });

  clearButton.addEventListener('click', () => {
    selectedId = null;
    input.value = '';
    dropdown.hidden = true;
    hint.textContent = 'You must select a question from the dropdown. Free-form questions cannot be submitted.';
    answerPanel.className = 'answer-panel empty-answer';
    answerPanel.innerHTML = '<div class="answer-placeholder"><span>SELECT A QUESTION</span><p>Your reviewed answer will appear here.</p></div>';
    input.focus();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.qa-search-wrap')) dropdown.hidden = true;
  });
})();
