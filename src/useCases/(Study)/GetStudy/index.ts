import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { GetStudyController } from "./GetStudy_Controller";
import { GetStudyUseCase } from "./GetStudy_UseCase";

const studyRepository = new MockStudyRepository();

const getStudyUseCase = new GetStudyUseCase(studyRepository);

const getStudyController = new GetStudyController(getStudyUseCase);

export { getStudyController };
