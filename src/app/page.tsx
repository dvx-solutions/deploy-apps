import { AddApplicationPopover } from "@/components/add-application-popover";
import { EnvironmentApps } from "@/components/environment-apps";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <AddApplicationPopover />
      </div>

      <section className="flex h-fit items-center gap-8 justify-around">
        <EnvironmentApps environment="DEV" />
        <EnvironmentApps environment="HMG" />
        <EnvironmentApps environment="PROD" />
      </section>
    </div>
  );
}
