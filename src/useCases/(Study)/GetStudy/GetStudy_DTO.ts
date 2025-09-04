import { z } from "zod";

export const getStudiesSchema = z.object({
  offset: z.string().optional().transform(Number).default(1),
  limit: z.string().optional().transform(Number).default(10),
  idStudy: z.string().optional(),
});

export type IGetStudiesDTO = z.infer<typeof getStudiesSchema>