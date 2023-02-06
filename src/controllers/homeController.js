import Home from '../models/Home.js';
import UserValidation from '../validation/homeValidation.js';
import Register from '../models/Register.js';
import bcryt from 'bcryptjs';
import Cloudinary from '../utils/cloudinary.js';

const HomeRegister = async (req, res) => {

  const { error } = UserValidation({
    names: req.body.names,
    place: req.body.place,
  
  });
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const { names, place, userId} = req.body;
    const user = await Home.findOne({ names });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const result = await Cloudinary(req);
  
    const newUser = new Home({
      names,
      place,
      userId: userId,
      image:result
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: 'user saved successfull', user: savedUser });

  } catch (error) {
    res.status(400).json({error:"missing"});
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Home.findById(id).populate({path:'userId', select: 'username age lastSeen details policeStation names othername'}).exec();
    if (!user) res.status(404).json({ message: 'user not found' });
    res.status(200).json({ user: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({error:"missing"});
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await Home.find();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};;
export { HomeRegister, getSingleUser, getAllUser };