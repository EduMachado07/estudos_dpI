import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { CreateStudyController } from "./CreateStudy_Controller";
import { CreateStudyUseCase } from "./CreateStudy_UseCase";

// Configura e injeta dependências para o módulo.
// Facilita testes e mantém a arquitetura limpa.

// Instancia Repositories
const userRepository = new MockUserRepository();
const studyRepository = new MockStudyRepository();

// Instancia Use Case
const createStudyUseCase = new CreateStudyUseCase(studyRepository, userRepository);
// Instancia Controller
const createStudyController = new CreateStudyController(createStudyUseCase);

export { createStudyController };
