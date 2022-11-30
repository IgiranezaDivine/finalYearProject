import  express  from 'express';
import upload from '../middlewares/multer.js';
import Cloudinary from '../utils/cloudinary.js';
const app = express.Router();

app.post('/upload-images', upload.single('image'), async(req,res) => {
    const uploader = async (path) => await Cloudinary.uploads(path, 'Images');

console.log(req)
if(req.method === 'POST'){
    const urls =[]
    const files = req.files;
    for (const file of files){
        const {path} =file;
        const newPath = await uploader(path)
        urls.push(newPath)
        files.unlinkSync(path)
    }
    res.status(201).json({
        message: 'images uploaded successfully',
        data: urls
    })
}
else{
    res.status(404).json({
        err: '${req.method} method not allowed'
    })
}
})
export default app;
