import { AppsForm } from "@/components/apps-form";
import { Environment } from "@prisma/client";
import { prisma } from "@/utils/prisma";

export async function EnvironmentApps({
  environment,
}: {
  environment: Environment;
}) {
  const data = await prisma.application.findMany({ where: { environment } });

  return <AppsForm apps={data} enviroment={environment} />;
}
