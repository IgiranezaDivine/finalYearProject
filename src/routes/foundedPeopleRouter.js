import express from 'express';
import {
  Register,
  getAllUser,
  deleteUser,
  updateUser,
  getSingleUser,
} from '../controllers/foundedPeopleController.js';
import { isLogin, isAdmin } from '../middlewares/authMiddleware.js';
import { mutlerMiddleware } from '../middlewares/multer.js';
const route = express.Router();
// auth routers
route.post('/register',mutlerMiddleware.single('image'), Register);
//route.get('/', isLogin,  getAllUser);
route.delete('/deleteUser',isLogin, isAdmin, deleteUser);
route.patch('/updateUser',isLogin,isAdmin, updateUser);
route.get('/single',isLogin,isAdmin, getSingleUser);
route.use('/getAllUsers', isLogin, isAdmin, getAllUser)

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