import { NotFound } from "../../../repositories/IErrorRepository";
import { IStudyRepository } from "../../../repositories/IStudyRepository";
import { IDeleteStudyDTO } from "./DeleteStudy_DTO";

export class DeleteStudyUseCase {
    constructor(
        private studiesRepository: IStudyRepository
    ) {}
    
    async execute(data: IDeleteStudyDTO): Promise<void> {
        const studyExists = await this.studiesRepository.findById(data.id);
        if (!studyExists) {
            throw new NotFound("Estudo não encontrado no sistema");
        }
        
        return await this.studiesRepository.deleteById(data.id);
    }
}