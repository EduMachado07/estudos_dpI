import { z } from "zod";

export const deleteStudySchema = z.object({
  id: z.string().min(1, "ID não informado"),
});

export type IDeleteStudyDTO = z.infer<typeof deleteStudySchema>;
