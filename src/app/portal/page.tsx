import { Suspense } from "react";

import { AddApplicationPortalPopover } from "@/components/add-application-portal-popover";
import { PortalApps } from "@/components/portal-apps";
import { ReorderApplicationsWrappper } from "@/components/reorder-applications-wrapper";

export default async function Home() {
  const fallback = <span>Loading...</span>;
  return (
    <div>
      <div className="flex justify-end mb-4 gap-4">
        <AddApplicationPortalPopover />

        <Suspense fallback={fallback}>
          <ReorderApplicationsWrappper />
        </Suspense>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-8 justify-start">
        <Suspense fallback={fallback}>
          <PortalApps />
        </Suspense>
      </section>
    </div>
  );
}
