import Image from "next/image";

import { AddApplicationPortalPopover } from "@/components/add-application-portal-popover";
import { DeletePortalApplicationPopover } from "@/components/delete-portal-application-popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getPortalApps } from "@/utils/portal-apps";

export async function PortalApps() {
  const data = await getPortalApps();

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-[calc(100vh-9rem)] overflow-auto gap-4 justify-start">
      {data.map((app) => (
        <Card key={app.id}>
          <CardHeader className="p-5">
            <CardTitle>{app.name}</CardTitle>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-start">
                  <CardDescription className="line-clamp-1">
                    {app.description}
                  </CardDescription>
                </TooltipTrigger>
                <TooltipContent>{app.description}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>

          <CardContent className="flex p-5 flex-col justify-between gap-4">
            <div className="relative w-full h-40">
              <Image src={app.image} fill alt={app.name} className="rounded" />
            </div>

            <div className="flex items-center justify-center w-full gap-2">
              <AddApplicationPortalPopover app={app} />
              <DeletePortalApplicationPopover id={app.id} />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
