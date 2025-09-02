import { Study } from '../entities/Study'

export interface IStudyRepository {
    create(data: Study): Promise<Study>;
    // findStudies(data: Study): Promise<void>;
    // findStudyById(data: Study): Promise<void>;
    // updateStudyById(data: Study): Promise<void>;
    // deleteStudyById(data: Study): Promise<void>;
}