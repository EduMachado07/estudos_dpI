import { Study } from '../entities/Study'
import { IGetStudiesDTO } from '../useCases/(Study)/GetStudy/GetStudy_DTO';

export interface IStudyRepository {
    create(data: Study): Promise<Study>;
    findStudies({limit, offset}: IGetStudiesDTO): Promise<Study[]>;
    findStudyById(id: string): Promise<Study>;
    // updateStudyById(data: Study): Promise<void>;
    // deleteStudyById(data: Study): Promise<void>;
}