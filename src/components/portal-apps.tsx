import Image from "next/image";

import { AddApplicationPortalPopover } from "@/components/add-application-portal-popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/utils/prisma";
import { sleep } from "@/utils/sleep";

export async function PortalApps() {
  const data = await prisma.portalApp.findMany({
    orderBy: { sequence: "asc" },
  });

  return (
    <>
      {data.map((app) => (
        <Card key={app.id}>
          <CardHeader>
            <CardTitle>{app.name}</CardTitle>
            <CardDescription>{app.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-44">
              <Image src={app.image} fill alt={app.name} className="rounded" />
            </div>

            <section className="mt-4 flex justify-center">
              <AddApplicationPortalPopover app={app} />
            </section>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
