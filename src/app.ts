import 'dotenv/config';
import express from 'express'
import { router } from './routes';
import { ErrorProcessing } from './repositories/implementations/ErrorRepository';

const app = express()

app.use(express.json())

app.use(router) // arquivo com as rotas

app.use(ErrorProcessing) // middleware de erro

export { app };
