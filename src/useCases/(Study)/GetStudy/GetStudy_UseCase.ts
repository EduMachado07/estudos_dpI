import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";
import { IGetStudiesDTO } from "./GetStudy_DTO";

export class GetStudyUseCase {
    constructor (
        private studyRepository: MockStudyRepository,
    ) {}

    async execute({limit, offset}: IGetStudiesDTO) {
        
    }
}
export class GetStudyByIdUseCase {
    constructor (
        private studyRepository: MockStudyRepository,
    ) {}

    async execute({idStudy}: IGetStudiesDTO) {
        
    }
}