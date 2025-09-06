import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

// Configuration Cloudinary
export const Cloudinary = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Configuration Multer
const storage = multer.diskStorage({
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})

export const upload = multer({storage});