# Deep-Tech Investment Notebook — Octobotics × PierSight

An interactive investment-research microsite built for a venture-fellowship application around two early-stage Indian deep-tech companies.

## Core thesis

> **When does hardware stop being the product?**

Both companies use difficult physical systems to observe parts of the real world that are expensive, risky or unreliable to observe today.

- **Octobotics:** hazardous asset → robotic NDT → repeated condition history → asset intelligence
- **PierSight:** ocean / vessel → SAR + AIS → repeated behaviour history → maritime intelligence

The investment only becomes venture-scale if the information layer begins to compound faster than the physical bottleneck.

## What this version demonstrates

- Thesis architecture connecting both companies without forcing them into the same market
- Six-part company investment map: current state → white space → why now → competition → advantage → end-state
- Competitive battlefield with explicit incumbent / new-entrant threats
- Evidence ledger separating **fact / assumption / thesis / risk**
- **Challenge My Thesis**: bear case → response → falsifier
- **How My View Changed** research timeline
- Venture-scale calculators for the core operating-leverage metrics
- Founder-room questions ranked by information gain
- Source-bounded **Ask My Research** retrieval experience
- Primary-source register

## Research discipline

The notebook follows a simple rule:

**Fact → Assumption → Thesis → Falsifier**

Company claims are treated as company claims unless independently verified. Forward-looking capabilities are labelled as target states. A risk is only useful if there is a condition that would make the investor change their mind.

## Run locally

No build tools or dependencies are required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a public GitHub repository.
2. Upload the repository contents to the root of `main`.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch** → `main` → `/ (root)`.
5. GitHub will publish to `https://<username>.github.io/<repo>/`.

A custom domain or Vercel deployment can be added later; the site is static and portable.

## Research assistant: current vs production

The included assistant is deliberately retrieval-only. It searches the curated corpus in `data.js`, labels the retrieved item as fact / thesis / risk, and links the relevant public source where available.

For a production RAG version:

1. Move LLM generation to a server-side / serverless endpoint.
2. Retrieve only from the approved research corpus.
3. Pass source IDs and evidence type with every retrieved passage.
4. Force factual sentences to cite a source.
5. Visibly distinguish sourced fact, investor inference and unresolved diligence question.
6. Refuse when the corpus is insufficient.
7. Never expose model API keys in client-side JavaScript.

## Files

- `index.html` — application shell
- `styles.css` — responsive visual system
- `app.js` — interactions, calculators and retrieval logic
- `data.js` — structured research / evidence corpus
- `research/` — human-readable working notes and methodology

Research snapshot: **September 2026**.
