import express, { NextFunction, Request, Response } from "express";
import { registerUserController } from "./useCases/(User)/RegisterUser";

const router = express.Router();

// Define rota e metodo do servico
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    return registerUserController.handle(req, res, next);
});

export { router };
