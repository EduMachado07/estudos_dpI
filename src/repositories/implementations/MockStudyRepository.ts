import { Study } from "../../entities/Study";
import { IStudyRepository } from "../IStudyRepository";

export let MockStudies: Study[] = []

export class MockStudyRepository implements IStudyRepository {
    async create(data: Study): Promise<Study> {
        MockStudies.push(data)

        return data
    }

    async findStudies({ limit, offset }: any): Promise<Study[]> {
        
    }

    async findStudyById(id: string): Promise<Study> {
        
    }
}