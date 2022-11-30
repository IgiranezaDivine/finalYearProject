import multer from "multer"

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, '/uploads')
  },
      filename: function(req,file,cb){
        cb(null, new Date().toISOString()+ '-' +file.originalname)
      }
    })

    const fileFilter = (req, file, cb) => {
        if (file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
      cb(null,true)
            }

            else{
               //reject file
         cb({ message: 'unsupported file format'}, false)
            }
        }

        const upload = multer({
            storage: storage,
            limits: {fileSize: 1024 * 1024},
            fileFilter: fileFilter
        })

       export default upload;
        
