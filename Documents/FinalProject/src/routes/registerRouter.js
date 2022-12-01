import express from 'express';
import {
  Register,
  getAllUser,
  deleteUser,
  updateUser,
  getSingleUser,
} from '../controllers/registerContoller.js';
import { isLogin, isAdmin } from '../middlewares/authMiddleware.js';
import { mutlerMiddleware } from '../middlewares/multer.js';

const route = express.Router();
// auth routers
route.post('/register',mutlerMiddleware.single('image'), Register);
route.get('/', isLogin, isAdmin, getAllUser);
route.delete('/',isLogin, deleteUser);
route.patch('/',isLogin, updateUser);
route.get('/single',isLogin, getSingleUser);

route.get('*', (req, res) => {
  res.status(404).json({ error: 'the path not found' });
});
route.post('*', (req, res) => {
  res.status(404).json({ error: 'the path not found' });
});
route.put('*', (req, res) => {
  res.status(404).json({ error: 'the path not found' });
});
export default route;