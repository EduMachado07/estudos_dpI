import { v2 as cloudinary } from "cloudinary";
import { storage, upload } from "../MulterConfig";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_KEY_SECRET,
});

cloudinary.uploader.upload(file, function(err, result) {
    
})