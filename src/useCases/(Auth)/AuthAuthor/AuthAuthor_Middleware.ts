import { Response, NextFunction } from "express";
import { IAuthAuthor } from "./AuthAuthor_DTO";
import jwt from "jsonwebtoken";
import { Unauthorized } from "../../../repositories/IErrorRepository";

export class AuthAuthorMiddleware {
  async handle(req: IAuthAuthor, res: Response, next: NextFunction) {
    try {
      const accessToken = req.cookies["accessToken"];

      if (!accessToken) {
        throw new Unauthorized("Acesso negado. Token não fornecido.");
      }

      const payload = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET
      ) as {
        author: string;
      };

      req.authorId = payload.author;
      next();
    } catch (err) {
      next(err);
    }
  }
}
