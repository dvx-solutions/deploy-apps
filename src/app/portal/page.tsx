import { Suspense } from "react";

import { AddApplicationPortalPopover } from "@/components/add-application-portal-popover";
import { PortalApps } from "@/components/portal-apps";
import { ReorderApplicationsDialog } from "@/components/reorder-applications-dialog";

export const dynamic = "force-dynamic";

export default async function Home() {
  const fallback = <span>Loading...</span>;
  return (
    <>
      <div className="flex justify-end mb-4 gap-4">
        <AddApplicationPortalPopover />

        <ReorderApplicationsDialog />
      </div>

      <Suspense fallback={fallback}>
        <PortalApps />
      </Suspense>
    </>
  );
}
