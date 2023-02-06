import express from 'express';
import { createRoles, getRoles } from '../controllers/roleController.js';
const route = express.Router();

route.post('/createRole', createRoles);
route.get('/getRole', getRoles);

export default route;