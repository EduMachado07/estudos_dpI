import { Cloudinary, upload } from "../UploadImageProvider";

export class UploadThumbnail {
  async cloudinary(filePath: string) {
    const result = await Cloudinary.uploader.upload(filePath, {
      folder: "studies_thumbnails",
      transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
    });

    return result.secure_url;
  }
}
