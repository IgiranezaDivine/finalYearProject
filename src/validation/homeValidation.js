import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = joi.extend(joiPasswordExtendCore);
const UserValidation = (data) => {
  const shema = joi.object({
    names: joi.string().min(5).max(30).required(),
    place: joi.string().min(3).max(30).required(),
  
  });
  return shema.validate(data);
};

export default UserValidation;