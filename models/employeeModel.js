const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    customId: Number,
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    departmentId: Number,
  },
  { versionKey: false }
);

// a model is a class with which we contruct documents in collection
const Employee = mongoose.model("employee", employeeSchema, "employees");

// in mongoose.model there are 3 arguments
//argument 1: singular name of the collection
//argument 2: schemna Name as established
//argument 3: the collection name i reffer to specifically.

module.exports = Employee;
