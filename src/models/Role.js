import mongoose from 'mongoose';
const schema=mongoose.Schema;
const roleSchema=new schema({
    name:{
        type:String,
        enum:['user','admin'],
        defaultValue:'user',

    },
    create_at:{
        type:Date,
        default:new Date(),
    },
});
export default mongoose.model('role',roleSchema);