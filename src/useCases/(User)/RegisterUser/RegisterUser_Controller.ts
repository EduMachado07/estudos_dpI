import { NextFunction, Request, Response } from "express";
import {
  BadRequest,
  ZodValidationError,
} from "../../../repositories/IErrorRepository";
import { registerUserSchema } from "./Register_DTO";
import { RegisterUserUseCase } from "./Register_UseCase";
import { z } from "zod";

// Recebe requisicao HTTP e trata respostas ou erros.
// Lida apenas com HTTP, chama a logica de negocio.
export class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const data = registerUserSchema.parse(req.body);

      const newUser = await this.registerUserUseCase.execute(data);

      return res.status(201).json({ message: "usuário criado: ", newUser });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const zodValidationError = new ZodValidationError(err);
        return next(zodValidationError);
      }
      next(err); // envia erro para middleware tratar
    }
  }
}
