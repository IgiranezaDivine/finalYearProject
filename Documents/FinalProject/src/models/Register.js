import mongoose from 'mongoose';

const schema = mongoose.Schema;
const User = new schema({
  name: String,
  username: String,
  age: Number,
  lastSeen: 
  {
    type:Date,
  },
  details: String,
  policeStation: String,
  names: String,
  othername: String,

  create_at: {
    type: Date,
    default: new Date(),
  },
 
});
export default mongoose.model('user', User);