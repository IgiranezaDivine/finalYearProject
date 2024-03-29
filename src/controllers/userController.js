import User from '../models/User.js';
import UserValidation from '../validation/userValidation.js';
import bcrypt from 'bcryptjs';

const Register = async (req, res) => {
  const { error } = UserValidation({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  if (error) return res.status(400).json(error.details[0].message);
  try {
    const { name, email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role: role,
    });
    const savedUser = await newUser.save();
    savedUser.password = undefined;
    res
      .status(201)
      .json({ message: 'user saved successfull', user: savedUser });
  } catch (error) {
    res.status(400).json(error);
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.find().populate('role').exec();
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
        ...req.body
      },
      // { new: true }
    ).populate('role');


    if (!user)return  res.status(404).json({ message: 'user not found' });
    
       res.status(200).json({ message: 'user updated successfully', user });
    
  } catch (error) {
    res.status(400).json({ error:error.message });
  }
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).populate('role').exec();
    if (!user) res.status(404).json({ message: 'user not found' });
    res.status(200).json({ user: user });
  } catch (error) {}
};
export { Register, getAllUser, deleteUser, updateUser, getSingleUser };