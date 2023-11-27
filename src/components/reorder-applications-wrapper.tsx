import { ReorderApplicationsDialog } from "@/components/reorder-applications-dialog";
import { getPortalApps } from "@/utils/portal-apps";

export async function ReorderApplicationsWrappper() {
  const data = await getPortalApps();

  return <ReorderApplicationsDialog apps={data} />;
}
