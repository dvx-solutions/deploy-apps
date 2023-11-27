"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { prisma } from "@/utils/prisma";

export async function createApplication(
  application: Prisma.ApplicationCreateInput
) {
  try {
    await prisma.application.create({ data: application });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function createPortalApplication(
  data: Prisma.PortalAppCreateInput
) {
  try {
    await prisma.portalApp.create({ data });
    revalidatePath("/portal");
  } catch (error) {
    console.log(error);
  }
}

export async function updatePortalApplication(
  id: number,
  data: Prisma.PortalAppUpdateInput
) {
  try {
    await prisma.portalApp.update({ data, where: { id } });
    revalidatePath("/portal");
  } catch (error) {
    console.log(error);
  }
}

export async function reorderApplications(
  data: Array<{
    id: number;
    sequence: number;
  }>
) {
  try {
    await Promise.all(
      data.map(async (item) =>
        prisma.portalApp.update({
          data: { sequence: item.sequence },
          where: { id: item.id },
        })
      )
    );

    revalidatePath("/portal");
  } catch (error) {
    console.log(error);
  }
}

export async function deletePortalApplication(id: number) {
  try {
    await prisma.portalApp.delete({
      select: { id: true },
      where: { id },
    });

    revalidatePath("/portal");
  } catch (error) {
    console.error(error);
  }
}
