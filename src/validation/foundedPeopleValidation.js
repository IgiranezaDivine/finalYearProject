import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend(joiPasswordExtendCore);
const UserValidation = (data) => {
  const shema = joi.object({
    name: joi.string().min(3).max(30).required(),
    username: joi.string().min(3).max(30),
    gender: joi.string().min(3).max(30).required(),
    age: joi.number().min(2).max(100).required(),
    names: joi.string().min(10).max(100).required(),
    district: joi.string().min(3).max(30).required(),
    phone: joi.number().min(10).max(30).required(),
    
  });
  return shema.validate(data);
};
export default UserValidation;