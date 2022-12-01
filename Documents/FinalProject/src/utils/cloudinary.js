import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = async (req, res) => {
  if (!req.file) {
    res.status(400).json({
      message: 'please upload a file',
    });
  } else {
    let imgur;
    await cloudinary.v2.uploader.upload(req.file.path, async (err, result) => {
      if (err)
        res.status(400).json({
          message: err.message,
        });
      return (imgur = result.secure_url);
    });
    return imgur;
  }
};
export default upload;
