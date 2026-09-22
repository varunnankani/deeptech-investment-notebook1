# Deep-Tech Investment Notebook — Octobotics × PierSight

An interactive investment-research microsite built around two early-stage Indian deep-tech companies.

## Core thesis

> **India's next deep-tech inflection is not simply “more robots” or “more satellites”; it is the conversion of physical systems into data/intelligence platforms.**

The two companies express the thesis differently:

- **Octobotics:** hazardous asset → robotic NDT → repeated condition history → asset intelligence
- **PierSight:** ocean / vessel → SAR + AIS → repeated behaviour history → maritime intelligence

The investment becomes venture-scale only when revenue begins to decouple from the physical bottleneck.

## V3 information architecture

The public notebook is intentionally narrative-first:

1. Thesis and four India-specific technology inflections
2. Two company investment cases using the same six-part structure
3. Competitive battlefield
4. Challenge My Thesis — bear case → response → falsifier
5. Venture-scale calculators
6. Founder Room
7. Source-grounded research assistant

The **Evidence Ledger has been moved to `evidence.html`** so facts / assumptions / thesis / risk remain auditable without interrupting the main experience.

The previous “How My View Changed” section has been removed from the public narrative.

## Research discipline

**Fact → Assumption → Thesis → Falsifier**

Company claims remain labelled as company claims. Forward-looking capabilities are not treated as deployed facts. A risk is useful only when there is a condition that would make the investment view change.

## Run locally

The static site needs no build step:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

On a local static server or GitHub Pages, **Ask My Research uses a local retrieval fallback**. No API key is needed.

## GitHub Pages

GitHub Pages works for testing the static experience:

1. Push the contents to `main`.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch → main → / (root)**.

The server-side LLM endpoint will not run on GitHub Pages, so the assistant automatically falls back to local retrieval.

## Vercel + grounded LLM assistant

The repo contains two serverless functions:

- `api/health.js` — tells the frontend whether the LLM backend is configured.
- `api/ask.js` — retrieves relevant passages from `research/knowledge.json`, sends only those passages to the model, and returns source-cited answers.

To enable it on Vercel:

1. Import this GitHub repository into Vercel.
2. Add an environment variable named `OPENAI_API_KEY`.
3. Optionally add `OPENAI_MODEL`; default is `gpt-5.6-luna`.
4. Deploy.

The API key is read only server-side. **Never put it in `app.js`, `index.html`, `data.js`, or any GitHub-visible file.**

The research assistant is deliberately bounded:

- answers only from the curated corpus;
- distinguishes fact from investment inference;
- cites the supplied source register;
- states when evidence is insufficient;
- does not browse the web during an answer.

## Key files

- `index.html` — main public investment notebook
- `evidence.html` — separate research audit trail
- `styles.css` — visual system
- `app.js` — main interactions, calculators, assistant frontend
- `evidence.js` — evidence-page filters and source register
- `data.js` — structured notebook content
- `api/ask.js` — server-side grounded LLM endpoint for Vercel
- `api/health.js` — assistant-mode detection
- `research/knowledge.json` — source-bounded retrieval corpus
- `research/` — human-readable notes and methodology

Research snapshot: **September 2026**.
