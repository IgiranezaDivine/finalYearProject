import User from '../models/foundedPeople.js';
import UserValidation from '../validation/foundedPeopleValidation.js';
import bcrypt from 'bcryptjs';
import Cloudinary from '../utils/cloudinary.js';

const Register = async (req, res) => {

    const { error } = UserValidation({
      name: req.body.name,
      username: req.body.username,
      gender: req.body.gender,
      age: req.body.age,
      names: req.body.names,
      district: req.body.district,
      phone: req.body.phone,
    });
    if (error) return res.status(400).json(error.details[0].message);
    try {
      const { name, username, gender,  age, date, names, district, phone} = req.body;
      const user = await User.findOne({ name });
      if (user) return res.status(400).json({ message: 'User already exists' });
  
      const result = await Cloudinary(req);
    
      const newUser = new User({
        
        name,
        username,
        gender,
        age,
        date,
        names,
        district,
        phone,
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
          gender: req.body.gender || user.gender,
          age: req.body.age || user.age,
          date: req.body.date || user.date,
          names: req.body.names || user.names,
          district: req.body.district || user.district,
          phone: req.body.phone || user.phone,
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
    const id = req.user.id;
    try {
      const user = await User.findById(id).populate('name').exec();
      if (!user) res.status(404).json({ message: 'user not found' });
      res.status(200).json({ user: user });
    } catch (error) {}
  };
  export { Register, getAllUser, deleteUser, updateUser, getSingleUser };