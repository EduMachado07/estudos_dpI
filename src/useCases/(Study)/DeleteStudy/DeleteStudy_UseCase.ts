import { IStudyRepository } from "../../../repositories/IStudyRepository";
import { IDeleteStudyDTO } from "./DeleteStudy_DTO";

export class DeleteStudyUseCase {
    constructor(
        private studiesRepository: IStudyRepository
    ) {}
    
    async execute(data: IDeleteStudyDTO): Promise<void | string> {
        return await this.studiesRepository.deleteById(data.id);
    }
}