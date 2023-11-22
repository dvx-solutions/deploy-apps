import { ReorderApplicationsDialog } from "@/components/reorder-applications-dialog";
import { prisma } from "@/utils/prisma";

export async function ReorderApplicationsWrappper() {
  const data = await prisma.portalApp.findMany({
    orderBy: { sequence: "asc" },
  });

  return <ReorderApplicationsDialog apps={data} />;
}
