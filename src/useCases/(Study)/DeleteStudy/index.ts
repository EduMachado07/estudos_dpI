import { DeleteStudyController } from "./DeleteStudy_Controller";
import { DeleteStudyUseCase } from "./DeleteStudy_UseCase";
import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";


const mockStudyRepository = new MockStudyRepository();

const deleteStudyUseCase = new DeleteStudyUseCase(mockStudyRepository);

const deleteStudyController = new DeleteStudyController(deleteStudyUseCase);

export { deleteStudyController };