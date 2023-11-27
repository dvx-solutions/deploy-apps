import { getPortalApps } from "@/utils/portal-apps";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getPortalApps();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
