import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { RegisterUserController } from "./RegisterUser_Controller";
import { RegisterUserUseCase } from "./Register_UseCase";

// Configura e injeta dependências para o módulo.
// Facilita testes e mantém a arquitetura limpa.

// Instancia Repositories
const registerUserRepository = new MockUserRepository();

// Instancia Use Case
const registerUserUseCase = new RegisterUserUseCase(registerUserRepository);
// Instancia Controller
const registerUserController = new RegisterUserController(registerUserUseCase);

export { registerUserController };
