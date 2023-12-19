import { cache } from "react";

import { prisma } from "@/utils/prisma";

export const revalidate = 43200;

export const getPortalApps = cache(async () => {
  const item = prisma.portalApp.findMany({
    orderBy: { sequence: "asc" },
  });

  return item;
});
