import { getPortalApps } from "@/utils/portal-apps";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getPortalApps();

  return Response.json(data);
}
