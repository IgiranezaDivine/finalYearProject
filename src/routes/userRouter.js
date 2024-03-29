import express from 'express';
import {
  Register,
  getAllUser,
  deleteUser,
  updateUser,
  getSingleUser,
} from '../controllers/userController.js';
import { createRoles, getRoles } from '../controllers/roleController.js';
import { isLogin, isAdmin } from '../middlewares/authMiddleware.js';

const route = express.Router();
// auth routers
route.post('/register', Register);
route.post('/role',isLogin, isAdmin, createRoles);
route.get('/getAllUser', isLogin, isAdmin, getAllUser);
route.delete('/deleteUser',isLogin, deleteUser);
route.get('/role', isLogin, isAdmin,getRoles);
route.patch('/updateUser:id',isLogin, updateUser);
route.get('/single/:id',isLogin, getSingleUser);

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