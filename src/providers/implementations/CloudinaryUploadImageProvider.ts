import { Cloudinary, upload } from "../UploadImageProvider";
import { Readable } from "stream";

export class UploadThumbnail {
  async cloudinary(fileBuffer: Buffer): Promise<string> {
    return new Promise((resolve, reject) => {
      // cria um stream de upload no cloudinary
      const uploadStream = Cloudinary.uploader.upload_stream(
        {
          folder: "studies_thumbnails",
          transformation: [
            { quality: "auto" }, // ajusta a qualidade automaticamente
            { fetch_format: "auto" }, // converte para um formato mais leve
          ],
        },
        (error, result) => {
          if (error) return reject("Erro de envio Cloudinary: " + error);
          if (!result)
            return reject(new Error("Erro ao fazer upload da imagem"));
          resolve(result.secure_url);
        }
      );

      Readable.from(fileBuffer).pipe(uploadStream);
    });
  }
}
