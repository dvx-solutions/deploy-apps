"use server";

import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
