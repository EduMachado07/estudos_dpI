import z from "zod";
import {
  BadRequest,
  ZodValidationError,
} from "../../../repositories/IErrorRepository";
import { NextFunction, Request, Response } from "express";
import { CreateStudySchema } from "./CreateStudy_DTO";
import { CreateStudyUseCase } from "./CreateStudy_UseCase";

export class CreateStudyController {
  constructor(private createStudyUseCase: CreateStudyUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const data = CreateStudySchema.parse(req.body);
      const thumbnail = req.file?.buffer;

      if (!thumbnail) {
        throw new BadRequest("Thumbnail não informada");
      }

      const study = await this.createStudyUseCase.execute(data, thumbnail);

      return res
        .status(201)
        .json({ message: "Estudo criado com sucesso.", estudo: study });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodValidationError = new ZodValidationError(err);
        return next(zodValidationError);
      }
      next(err);
    }
  }
}
