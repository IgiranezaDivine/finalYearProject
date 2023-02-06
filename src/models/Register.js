import mongoose from 'mongoose';

const schema = mongoose.Schema;
const Register = new schema({
  name: String,
  username: String,
  age: Number,
  lastSeen: 
  {
    type:String,
  },
  details: String,
  policeStation: String,
  names: String,
  othername: String,
  image:String,
 
  create_at: {
    type: Date,
    default: new Date(),
  },
 
});
export default mongoose.model('register', Register);