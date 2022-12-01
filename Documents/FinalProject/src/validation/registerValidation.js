import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend(joiPasswordExtendCore);
const UserValidation = (data) => {
  const shema = joi.object({
    name: joi.string().min(3).max(30).required(),
    username: joi.string().min(3).max(30).required(),
    age: joi.number().min(2).max(100).required(),
    lastSeen: joi.string().min(5).max(100).required(),
    details: joi.string().min(3).max(100).required(),
    policeStation: joi.string().min(3).max(30).required(),
    names: joi.string().min(3).max(30).required(),
    othername: joi.string().min(3).max(30),
  });
  return shema.validate(data);
};

export default UserValidation;