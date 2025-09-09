import { Study } from "../../../entities/Study";
import { UploadThumbnail } from "../../../providers/implementations/CloudinaryUploadImageProvider";
import { NotFound } from "../../../repositories/IErrorRepository";
import { IStudyRepository } from "../../../repositories/IStudyRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateStudyDTO } from "./UpdateStudy_DTO";

export class UpdateStudyUseCase {
  constructor(
    private studyRepository: IStudyRepository,
    private uploadThumbnail: UploadThumbnail
  ) {}

  async execute(
    data: IUpdateStudyDTO,
    thumbnail?: Buffer
  ): Promise<Study> {
    const studyExists = await this.studyRepository.findById(data.study);
    if (!studyExists) {
      throw new NotFound("Estudo não encontrado no sistema");
    }

    let thumbnailUrl = studyExists.thumbnail;
    if (thumbnail) {
      thumbnailUrl = await this.uploadThumbnail.cloudinary(thumbnail);
    }

    const dataStudy: Partial<Study> = {
      ...data,
      thumbnail: thumbnailUrl
    };

    const studyUpdated = await this.studyRepository.updateById(data.study, dataStudy);
    return studyUpdated;
  }
}
