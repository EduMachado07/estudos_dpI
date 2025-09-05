import { StorageService } from "../CloudinaryConfig";

export class UploadImage {
    constructor(
        private storageService: StorageService
    ){}

    async execute(){
        this.storageService.Cloudinary()
    }
}