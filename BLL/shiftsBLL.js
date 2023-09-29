const Shift = require("../models/shiftModel");

/* CRUD - Create , Read, Update, Delete */

//GET -  Get All - Read
const getAllShifts = () => {
  return Shift.find({});
};

//Get - Get Shift by ID - Read
const getShiftById = (id) => {
  return Shift.findById({ _id: id });
};

// POST - Create
const addShift = async (obj) => {
  const per = new Shift(obj);
  await per.save();
  return "Created! ";
};
//PUT - Update
const updateShift = async (id, obj) => {
  await Shift.findByIdAndUpdate(id, obj);
  return "Shifts Updated!";
};

//DELETE - Delete
const deleteShift = async (id) => {
  await Shift.findOneAndDelete({ _id: id });
  return "Shift Deleted";
};

module.exports = {
  getAllShifts,
  getShiftById,
  addShift,
  updateShift,
  deleteShift,
};
