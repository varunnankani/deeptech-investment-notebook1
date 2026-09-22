# Deep-Tech Investment Notebook V5

A static GitHub Pages investment-research microsite on Octobotics and PierSight.

## Structure

- `index.html` - common thesis, deep-dive entry points and guided research assistant
- `octobotics.html` - Octobotics investment deep dive, visually inspired by the company's industrial asset-health positioning
- `piersight.html` - PierSight investment deep dive, visually inspired by the company's mission-specific SAR presentation
- `evidence.html` - concise evidence and methodology page
- `questions.js` - 25 approved questions with fixed reviewed answers
- `app.js` - autocomplete and forced-selection logic
- `styles.css` - all page themes and responsive design
- `research/` - working research corpus

## Guided assistant behavior

The assistant is intentionally closed-ended.

1. The reviewer types a topic or partial question.
2. The interface searches across 25 approved questions.
3. Up to seven relevant questions appear in a dropdown.
4. The reviewer must select one of those questions.
5. A fixed reviewed answer is shown.
6. Free-form submission is disabled.

Question tags are rendered as right-aligned badges in the dropdown and answer header.

## GitHub Pages

Upload the contents of this folder to the root of the repository and deploy from the `main` branch using GitHub Pages.
