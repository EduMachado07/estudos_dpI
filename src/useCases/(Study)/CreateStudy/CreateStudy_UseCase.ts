import { UploadThumbnail } from "../../../providers/implementations/CloudinaryUploadImageProvider";
import { NotFound } from "../../../repositories/IErrorRepository";
import { MockStudyRepository } from "../../../repositories/implementations/MockStudyRepository";
import { MockUserRepository } from "../../../repositories/implementations/MockUserRepository";
import { ICreateStudyDTO } from "./CreateStudy_DTO";

export class CreateStudyUseCase {
  constructor(
    private studyRepository: MockStudyRepository,
    private userRepository: MockUserRepository,
    private uploadThumbnail: UploadThumbnail
  ) {}

  async execute(data: ICreateStudyDTO) {
    const userAlreadyExists = await this.userRepository.FindUserById(data.authorId);

    if (!userAlreadyExists) {
      throw new NotFound("Ops! Usuário não encontrado em nosso sistema");
    }

    // tratar thumbnail
    const thumbnailUrl = await this.uploadThumbnail.cloudinary(data.thumbnail)

    // tratar body
    

    const newStudy = await this.studyRepository.create({
      ...data,
      thumbnail: thumbnailUrl
    }) 

    return newStudy
  }
}
