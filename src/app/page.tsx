import { EnvironmentApps } from "@/components/environment-apps";

export default async function Home() {
  return (
    <section className="flex h-fit items-center gap-8 justify-around">
      <EnvironmentApps environment="DEV" />
      <EnvironmentApps environment="HMG" />
      <EnvironmentApps environment="PROD" />
    </section>
  );
}
