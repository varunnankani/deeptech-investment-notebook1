(function () {
  const input = document.getElementById('questionSearch');
  const dropdown = document.getElementById('questionDropdown');
  const options = document.getElementById('questionOptions');
  const answerPanel = document.getElementById('answerPanel');
  const clearButton = document.getElementById('clearQuestion');
  const browseButton = document.getElementById('browseQuestions');
  const hint = document.getElementById('questionHint');
  const filters = Array.from(document.querySelectorAll('.qa-filter'));
  const questions = window.approvedQuestions || [];

  if (!input || !dropdown || !options || !answerPanel || !questions.length) return;

  let selectedId = null;
  let activeFilter = 'all';

  function normalise(value) {
    return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function tokens(value) {
    return normalise(value).split(' ').filter(Boolean);
  }

  function matchesFilter(item) {
    return activeFilter === 'all' || item.tags.includes(activeFilter);
  }

  function scoreQuestion(item, query) {
    const q = normalise(query);
    if (!q) return 1;
    const question = normalise(item.question);
    const tags = normalise(item.tags.join(' '));
    const answer = normalise(item.answer);
    const queryTokens = tokens(q);
    let score = 0;

    if (question.includes(q)) score += 40;
    if (tags.includes(q)) score += 20;
    queryTokens.forEach((token) => {
      if (question.includes(token)) score += 10;
      if (tags.includes(token)) score += 7;
      if (answer.includes(token)) score += 2;
    });
    return score;
  }

  function tagMarkup(tags) {
    return tags.map((tag) => `<span class="question-tag ${tag.toLowerCase()}">${tag}</span>`).join('');
  }

  function setFilter(filter) {
    activeFilter = filter;
    filters.forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
    renderDropdown(input.value, true);
  }

  function getMatches(query) {
    return questions
      .filter(matchesFilter)
      .map((item) => ({ item, score: scoreQuestion(item, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.id - b.item.id);
  }

  function renderDropdown(query, forceOpen) {
    const matches = getMatches(query.trim());
    if (!forceOpen && !query.trim()) {
      dropdown.hidden = true;
      browseButton?.setAttribute('aria-expanded', 'false');
      return;
    }

    dropdown.hidden = false;
    browseButton?.setAttribute('aria-expanded', 'true');

    if (!matches.length) {
      options.innerHTML = '<div class="qa-no-match"><b>No approved question found.</b><span>Try another topic or switch the company filter.</span></div>';
      return;
    }

    options.innerHTML = matches.map(({ item }) => `
      <button class="qa-option" type="button" role="option" data-id="${item.id}">
        <span class="qa-option-question">${item.question}</span>
        <span class="qa-option-tags">${tagMarkup(item.tags)}</span>
      </button>
    `).join('');

    options.querySelectorAll('.qa-option').forEach((button) => {
      button.addEventListener('click', () => selectQuestion(Number(button.dataset.id)));
    });
  }

  function renderAnswer(item) {
    answerPanel.classList.remove('empty-answer');
    answerPanel.innerHTML = `
      <div class="answer-head">
        <div>
          <span class="answer-number">QUESTION ${String(item.id).padStart(2, '0')}</span>
          <h3>${item.question}</h3>
        </div>
        <div class="answer-tags">${tagMarkup(item.tags)}</div>
      </div>
      <div class="answer-copy"><p>${item.answer}</p></div>
      <div class="answer-foot"><span>REVIEWED RESPONSE</span><span>Fixed investment view</span></div>
    `;
  }

  function selectQuestion(id) {
    const item = questions.find((question) => question.id === id);
    if (!item) return;
    selectedId = id;
    input.value = item.question;
    dropdown.hidden = true;
    browseButton?.setAttribute('aria-expanded', 'false');
    hint.textContent = 'Selected from the reviewed question set.';
    renderAnswer(item);
  }

  input.addEventListener('input', () => {
    selectedId = null;
    hint.textContent = 'Type to filter, or open the dropdown to browse. A question must be selected from the list.';
    renderDropdown(input.value, true);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) renderDropdown(input.value, true);
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!selectedId) {
        renderDropdown(input.value, true);
        hint.textContent = 'Choose one of the reviewed questions from the dropdown.';
        input.classList.remove('invalid-input');
        void input.offsetWidth;
        input.classList.add('invalid-input');
      }
    }
    if (event.key === 'Escape') {
      dropdown.hidden = true;
      browseButton?.setAttribute('aria-expanded', 'false');
    }
  });

  browseButton?.addEventListener('click', () => {
    const opening = dropdown.hidden;
    if (opening) renderDropdown(input.value, true);
    else {
      dropdown.hidden = true;
      browseButton.setAttribute('aria-expanded', 'false');
    }
  });

  clearButton?.addEventListener('click', () => {
    selectedId = null;
    input.value = '';
    dropdown.hidden = true;
    browseButton?.setAttribute('aria-expanded', 'false');
    hint.textContent = 'Type to filter, or open the dropdown to browse. A question must be selected from the list.';
    answerPanel.className = 'answer-panel empty-answer';
    answerPanel.innerHTML = '<div class="answer-placeholder"><span>SELECT A REVIEWED QUESTION</span><p>The investment view will appear here.</p></div>';
    input.focus();
  });

  filters.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.qa-search-wrap')) {
      dropdown.hidden = true;
      browseButton?.setAttribute('aria-expanded', 'false');
    }
  });
})();
