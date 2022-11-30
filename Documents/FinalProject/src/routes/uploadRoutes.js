import  express  from 'express';
import bodyParser from 'body-parser';
import upload from './multer';
import Cloudinary from './cloudinary';
import fs from './fs';
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/upload-images', upload.array('image'), async(req,res) => {
    const uploader = async (path) => await Cloudinary.uploads(path, 'Images');


if(req.method === 'POST'){
    const urls =[]
    const files = req.files;
    for (const file of files){
        const {path} =file;
        const newPath = await uploader(path)
        urls.push(newPath)
        files.unlinkSync(path)
    }
    res.status(200).json({
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