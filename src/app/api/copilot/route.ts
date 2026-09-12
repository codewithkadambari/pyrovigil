export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const key = process.env.OPENAI_API_KEY;
  const payload = await request.json() as { summary?: unknown; question?: string };
  const summary = (payload.summary ?? {}) as { high?: number; medium?: number; low?: number; averageRiskScore?: number };
  const localBrief = () => {
    const high = summary.high ?? 0, medium = summary.medium ?? 0, low = summary.low ?? 0, score = summary.averageRiskScore ?? 0;
    const level = score >= 72 ? "high" : score >= 42 ? "elevated" : "controlled";
    return `Predicted area risk: ${level.toUpperCase()} (${score}/100). ${high} high-risk, ${medium} medium-risk, and ${low} low-risk detections were identified. Prioritize verification of high-FRP detections, check nearby industrial assets and wind conditions, and escalate only after local authority validation.`;
  };
  if (!key) return Response.json({ analysis: localBrief(), mode: "local-risk-model" });
  const question = payload.question?.trim() || "Summarize the risk and recommend immediate response actions.";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-5",
      input: [
        { role: "system", content: "You are PYROVIGIL Copilot, an industrial fire incident analyst. Give concise, operationally useful analysis. Do not claim emergency services were contacted. State uncertainty when data is limited." },
        { role: "user", content: `FIRMS risk summary: ${JSON.stringify(payload.summary ?? {})}\n\nQuestion: ${question}` },
      ],
    }),
  });
  const data = await response.json() as { output_text?: string; error?: { message?: string } };
  if (!response.ok) return Response.json({ analysis: localBrief(), mode: "local-risk-model" });
  return Response.json({ analysis: data.output_text ?? localBrief(), mode: "openai" });
}
