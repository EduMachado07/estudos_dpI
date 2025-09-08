import z from "zod";
import {
  BadRequest,
  ZodValidationError,
} from "../../../repositories/IErrorRepository";
import { NextFunction, Request, Response } from "express";
import { DeleteStudyUseCase } from "./DeleteStudy_UseCase";
import { deleteStudySchema } from "./DeleteStudy_DTO";

export class DeleteStudyController {
  constructor(private deleteStudyUseCase: DeleteStudyUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = deleteStudySchema.parse(req.params);

      await this.deleteStudyUseCase.execute(id);

      return res
        .status(200)
        .json({ message: "Estudo retirado do sistema com sucesso." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodValidationError = new ZodValidationError(err);
        return next(zodValidationError);
      }
      next(err);
    }
  }
}
