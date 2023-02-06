import express from 'express';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import passwordReset from './passwordReset.js';
import uploadRoutes from './uploadRoutes.js';
import registerRouter from './registerRouter.js';
import homeRouter from './homeRouter.js';
import roleRouter from './roleRouter.js';
import foundedPeopleRouter from './foundedPeopleRouter.js';


const route = express.Router();
route.use('/user', userRouter);
route.use('/auth', authRouter);
route.use('/role', roleRouter);
route.use("/password-reset", passwordReset);
route.use('/image',uploadRoutes)
route.use('/userRegister', registerRouter);
route.use('/homeRegister', homeRouter);
route.use('/foundedPeople', foundedPeopleRouter);
export default route;
