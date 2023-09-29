const Employee = require("../models/employeeModel");

/* CRUD - Create , Read, Update, Delete */

//GET -  Get All - Read
const getAllEmployees = () => {
  return Employee.find({});
};

//Get - Get Employee by ID - Read
const getEmployeeById = (id) => {
  return Employee.findById({ _id: id });
};

// POST - Create
const addEmployee = async (obj) => {
  const per = new Employee(obj);
  await per.save();
  return "Created! ";
};
//PUT - Update
const updateEmployee = async (id, obj) => {
  await Employee.findByIdAndUpdate(id, obj);
  return "Employees Updated!";
};

//DELETE - Delete
const deleteEmployee = async (id) => {
  await Employee.findOneAndDelete({ _id: id });
  return "Employee Deleted";
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
