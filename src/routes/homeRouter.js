import express from 'express';
import {
    HomeRegister,
  getSingleUser,
  getAllUser,
} from '../controllers/homeController.js';
import { isLogin, isAdmin } from '../middlewares/authMiddleware.js';
import { mutlerMiddleware } from '../middlewares/multer.js';

const route = express.Router();
// auth routers
route.post('/register',mutlerMiddleware.single('image'), HomeRegister);
route.get('/single/:id',isLogin, getSingleUser);
route.get('/', isLogin,  getAllUser);

route.get('*', (req, res) => {
  res.status(404).json({ error: 'the path not found' });
});
route.post('*', (req, res) => {
  res.status(404).json({ error: 'the path not found' });
});

export default route;