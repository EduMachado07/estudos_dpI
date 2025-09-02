import { NotFound } from "../../../repositories/IErrorRepository";
import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { ICreateStudyDTO } from "./CreateStudy_DTO";

export class CreateStudyUseCase {
  constructor(
    private studyRepository: MockStudyRepository,
    private userRepository: MockUserRepository
  ) {}

  async execute(data: ICreateStudyDTO) {
    const userAlreadyExists = await this.userRepository.FindUserById(data.authorId);

    if (!userAlreadyExists) {
      throw new NotFound("Ops! Usuário não encontrado em nosso sistema");
    }

    // tratar thumbnail

    // tratar body

    const newStudy = await this.studyRepository.create(data) 

    return newStudy
  }
}
