export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const key = process.env.NASA_FIRMS_MAP_KEY;
  if (!key) return Response.json({ error: "Live FIRMS is not configured for this deployment. Add NASA_FIRMS_MAP_KEY in Vercel Project Settings → Environment Variables, then redeploy." }, { status: 503 });
  const { searchParams } = new URL(request.url);
  // A five-day window prevents an empty dashboard on days with no new India detections.
  const days = Math.min(Math.max(Number(searchParams.get("days") ?? 5), 1), 5);
  const source = searchParams.get("source") ?? "VIIRS_NOAA20_NRT";
  const india = "68,6,98,37";
  const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${encodeURIComponent(key)}/${encodeURIComponent(source)}/${india}/${days}`;
  const response = await fetch(url, { next: { revalidate: 300 } });
  if (!response.ok) return Response.json({ error: "NASA FIRMS did not return live records. Check the FIRMS MAP_KEY and try again.", status: response.status }, { status: 502 });
  return new Response(await response.text(), { headers: { "Content-Type": "text/csv; charset=utf-8", "Cache-Control": "s-maxage=300" } });
}
