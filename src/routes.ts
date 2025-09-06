import express, { NextFunction, Request, Response } from "express";
import { registerUserController } from "./useCases/(User)/RegisterUser";
import { loginUserController } from "./useCases/(User)/LoginUser";
import { createStudyController } from "./useCases/(Study)/CreateStudy";
import { upload } from "./providers/UploadImageProvider";

const router = express.Router();

// Define rota e metodo do servico
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    return registerUserController.handle(req, res, next);
});
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    return loginUserController.handle(req, res, next);
});
router.post('/study', upload.single("thumbnail"), (req: Request, res: Response, next: NextFunction) => {
    return createStudyController.handle(req, res, next);
});

export { router };
