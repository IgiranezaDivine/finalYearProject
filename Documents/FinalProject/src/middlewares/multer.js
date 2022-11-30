import multer from 'multer';

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    //reject file
    cb({ message: 'unsupported file format' }, false);
  }
};

export const mutlerMiddleware = multer({ storage, fileFilter });
