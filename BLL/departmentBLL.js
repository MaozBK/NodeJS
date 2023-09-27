const Department = require('../models/departmentModel');


/* CRUD - Create , Read, Update, Delete */

//GET -  Get All - Read
const getAllDepartments = () => {
    return Department.find({})
};

//Get - Get Department by ID - Read
const getDepartmentById = (id) => {
    return Department.findById({ _id: id })
};

// POST - Create 
const addDepartment = async (obj) => {
    const per = new Department(obj)
    await per.save()
    return "Created! "
};
//PUT - Update
const updateDepartment = async (id, obj) => {
    await Department.findByIdAndUpdate(id, obj)
    return "Departments Updated!"
};

//DELETE - Delete
const deleteDepartment = async (id) => {
    await Department.findOneAndDelete({ _id: id })
    return "Department Deleted"
};

module.exports = {
    getAllDepartments,
    getDepartmentById,
    addDepartment,
    updateDepartment,
    deleteDepartment
};