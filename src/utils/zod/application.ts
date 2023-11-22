import { Environment } from "@prisma/client";
import * as z from "zod";

export const ApplicationModel = z.object({
  id: z.number().int(),
  name: z.string(),
  url: z.string(),
  environment: z.nativeEnum(Environment),
});
