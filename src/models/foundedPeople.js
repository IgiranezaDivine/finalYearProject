import mongoose from 'mongoose';

const schema = mongoose.Schema;
const FoundedPeople = new schema({
  
  names: String,
  username: String,
  gender: String,
  age: Number,

  names: String,
  district: String,
  phone: Number,
  

  create_at: {
    type: Date,
    default: new Date(),
  },
 
});
export default mongoose.model('foundedPeople', FoundedPeople);