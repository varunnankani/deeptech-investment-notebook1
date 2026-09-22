module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control','no-store');
  res.status(200).json({ ok: true, llm: Boolean(process.env.OPENAI_API_KEY) });
};
