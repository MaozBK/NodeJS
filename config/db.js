const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/projectDB")
    .then(() => console.log("connected to DB"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
