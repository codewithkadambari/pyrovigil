export const dynamic = "force-dynamic";

const condition = (code: number) => code <= 1 ? "☀ Clear" : code <= 3 ? "☁ Partly cloudy" : code <= 48 ? "☁ Fog" : code <= 67 ? "💧 Rain" : "⛈ Storm";

export async function GET() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,visibility";
  const response = await fetch(url, { next: { revalidate: 900 } });
  if (!response.ok) return Response.json({ error: "Weather data unavailable" }, { status: 502 });
  const data = await response.json() as { current: Record<string, number> };
  const current = data.current;
  return Response.json({ temperature: current.temperature_2m, humidity: current.relative_humidity_2m, windSpeed: current.wind_speed_10m, windDirection: current.wind_direction_10m, visibility: Math.round(current.visibility / 1000 * 10) / 10, condition: condition(current.weather_code) });
}
