import * as z from "zod";

export const PortalAppModel = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string(),
  tag: z.string(),
  url: z.string().optional(),
});
