import express from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import passwordReset from './passwordReset.js';
import uploadRoutes from './uploadRoutes.js';


const route = express.Router();
route.use('/user', userRouter);
route.use('/auth', authRouter);
route.use("/password-reset", passwordReset);
export default route;
