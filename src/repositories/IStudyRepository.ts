import { Study } from '../entities/Study'

export interface IStudyRepository {
    create(data: Study): Promise<Study>;
    findStudies(offset: number, limit: number): Promise<{ studies: Study[]; length: number }>;
    findStudyById(id: string): Promise<Study | null>;
    // updateStudyById(data: Study): Promise<void>;
    deleteById(id: string): Promise<void | string>;
}