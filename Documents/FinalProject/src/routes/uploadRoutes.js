import express from 'express';
import { mutlerMiddleware } from '../middlewares/multer.js';
import Cloudinary from '../utils/cloudinary.js';
const app = express.Router();

app.post(
  '/upload-images',
  mutlerMiddleware.single('image'),
  async (req, res) => {
    try {
      const result = await Cloudinary(req);
      console.log(result);

      res.status(200).json({
        message: 'image uploaded successfully',
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

export default app;
