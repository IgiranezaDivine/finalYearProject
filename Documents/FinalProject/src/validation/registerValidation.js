import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend(joiPasswordExtendCore);
const UserValidation = (data) => {
  const shema = joi.object({
    name: joi.string().min(3).max(30).required(),
    username: joi.string().min(3).max(30).required(),
    age: joi.number().min(1).max(2).required(),
    lastSeen: joi.string().min(3).max(30).required(),
    date: joi.date().min(3).max(30).required(),
  });
  return shema.validate(data);
};

export default UserValidation;