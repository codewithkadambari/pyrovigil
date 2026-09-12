type RecordInput = Record<string, string | number | undefined>;

const number = (value: string | number | undefined) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

// A transparent logistic-risk classifier. The coefficients are intentionally
// visible so they can be calibrated against labelled incident outcomes later.
function classify(record: RecordInput) {
  const frp = number(record.frp);
  const brightness = number(record.bright_ti4 ?? record.brightness);
  const confidence = String(record.confidence ?? "").toLowerCase();
  const confidenceScore = confidence === "h" || confidence === "high" ? 1 : confidence === "n" || confidence === "nominal" ? 0.62 : number(confidence) / 100;
  const daytime = String(record.daynight ?? "D").toUpperCase() === "D" ? 0.15 : 0;
  const z = -3.2 + 0.038 * Math.min(frp, 100) + 0.026 * Math.max(brightness - 300, 0) + 1.15 * confidenceScore + daytime;
  const score = Math.round((1 / (1 + Math.exp(-z))) * 100);
  const risk: "high" | "medium" | "low" = score >= 72 ? "high" : score >= 42 ? "medium" : "low";
  return { score, risk };
}

export async function POST(request: Request) {
  const payload = await request.json() as { records?: RecordInput[] };
  const records = Array.isArray(payload.records) ? payload.records.slice(0, 10000) : [];
  if (!records.length) return Response.json({ error: "No FIRMS records supplied." }, { status: 400 });
  const analyzed = records.map((record) => ({ ...record, ...classify(record) }));
  const totals = analyzed.reduce((acc, record) => {
    acc[record.risk] += 1;
    acc.totalScore += record.score;
    return acc;
  }, { high: 0, medium: 0, low: 0, totalScore: 0 });
  return Response.json({
    method: "transparent-logistic-risk-v1",
    recordsAnalyzed: analyzed.length,
    summary: { high: totals.high, medium: totals.medium, low: totals.low, averageRiskScore: Math.round(totals.totalScore / analyzed.length) },
    incidents: analyzed.slice(0, 250),
  });
}
