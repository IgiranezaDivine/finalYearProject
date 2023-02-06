import mongoose from 'mongoose';

const schema = mongoose.Schema;
const Home = new schema({
  names: String,
  place: String,
  image: String,
  // role: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'role',
  //  default:'63bd1aba28018cf1cee4113'
  // },
  userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'register'
	},


  create_at: {
    type: Date,
    default: new Date(),
  },
 
});
export default mongoose.model('home', Home);