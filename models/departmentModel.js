const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    customId: Number,
    name: String,
    manager: Number,
  },
  { versionKey: false }
);

// a model is a class with which we contruct documents in collection
const Department = mongoose.model(
  "department",
  departmentSchema,
  "departments"
);

// in mongoose.model there are 3 arguments
//argument 1: singular name of the collection
//argument 2: schemna Name as established
//argument 3: the collection name i reffer to specifically. (just incase there's a different plural name ex. person, persons, people etc.)

module.exports = Department;
