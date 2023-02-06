import User from '../models/Register.js';
import UserValidation from '../validation/registerValidation.js';
import bcrypt from 'bcryptjs';
import Cloudinary from '../utils/cloudinary.js';

const Register = async (req, res) => {

  const { error } = UserValidation({
    name: req.body.name,
    username: req.body.username,
    age: req.body.age,
    lastSeen: req.body.lastSeen,
    details: req.body.details,
    policeStation: req.body.policeStation,
    names: req.body.names,
    othername: req.body.othername,
  
  });
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const { name, username, age,  lastSeen, details, policeStation, names, othername} = req.body;
    const user = await User.findOne({ name });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const result = await Cloudinary(req);
  
    const newUser = new User({
      name,
      username,
      age,
      lastSeen,
      details,
      policeStation,
      names,
      othername,
      image:result
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: 'user saved successfull', user: savedUser });

  } catch (error) {
    res.status(400).json({error});
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.find().populate('name').exec();
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  const id = req.user.id;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        name: req.body.name || user.name,
        username: req.body.username || user.username,
        age: req.body.age || user.age,
        lastSeen: req.body.lastSeen || user.lastSeen,
        details: req.body.details || user.details,
        policeStation: req.body.policeStation || user.policeStation,
        names: req.body.names || user.names,
        othername: req.body.othername || user.othername,
       
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user updated successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).populate('name').exec();
    if (!user) res.status(404).json({ message: 'user not found' });
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export { Register, getAllUser, deleteUser, updateUser, getSingleUser };