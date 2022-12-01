import express from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import passwordReset from './passwordReset.js';
import uploadRoutes from './uploadRoutes.js';
import registerRouter from './registerRouter.js';


const route = express.Router();
route.use('/user', userRouter);
route.use('/auth', authRouter);
route.use("/password-reset", passwordReset);
route.use('/image',uploadRoutes)
route.use('/registerUser', registerRouter);
export default route;
