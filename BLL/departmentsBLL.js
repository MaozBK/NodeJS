const Department = require('../models/departmentModel');


/* CRUD - Create , Read, Update, Delete */

//GET -  Get All - Read
const getAllDepartments = () => {
    return Department.find({}) // will bring all documents from db 
};

//Get - Get Department by ID - Read
const getDepartmentById = (id) => {
    return Department.findById({ _id: id }) // '_id' is how the id prop look like in mongodb when automatically generated
};

// POST - Create 
const addDepartment = async (obj) => {
    const department = new Department(obj)
    await department.save()
    return "Created! "
};
//PUT - Update
const updateDepartment = async (id, obj) => {
    await Department.findByIdAndUpdate(id, obj) // (id I'm searching & object I want to update )
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