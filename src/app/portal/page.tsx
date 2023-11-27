import { Suspense } from "react";

import { AddApplicationPortalPopover } from "@/components/add-application-portal-popover";
import { PortalApps } from "@/components/portal-apps";
import { ReorderApplicationsWrappper } from "@/components/reorder-applications-wrapper";

export const dynamic = "force-dynamic";

export default async function Home() {
  const fallback = <span>Loading...</span>;
  return (
    <>
      <div className="flex justify-end mb-4 gap-4">
        <AddApplicationPortalPopover />

        <Suspense fallback={fallback}>
          <ReorderApplicationsWrappper />
        </Suspense>
      </div>

      <Suspense fallback={fallback}>
        <PortalApps />
      </Suspense>
    </>
  );
}
