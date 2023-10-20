const User = require("../models/userModel");

/* CRUD - Create , Read, Update, Delete */

//GET -  Get All - Read
const getAllUsers = () => {
  return User.find({});
};

//Get - Get User by ID - Read
const getUserById = (id) => {
  return User.findById({ _id: id });
};

// POST - Create
const addUser = async (obj) => {
  const per = new User(obj);
  await per.save();
  return "Created! ";
};
//PUT - Update
const updateUser = async (id, obj) => {
  await User.findByIdAndUpdate(id, obj);
  return "Users Updated!";
};

//DELETE - Delete
const deleteUser = async (id) => {
  await User.findOneAndDelete({ _id: id });
  return "User Deleted";
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
