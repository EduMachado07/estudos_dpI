import { z } from "zod";

export const CreateStudySchema = z.object({
  title: z.string().min(1, "Título não informado"),
  description: z.string().min(1, "Descrição não informada"),
  thumbnail: z.string().url("Thumbnail deve ser uma URL válida"),
  body: z.string().min(1, "Conteúdo não informado"),
  authorId: z.string().min(1, "Autor não informado"),
});

export type ICreateStudyDTO = z.infer<typeof CreateStudySchema>;
