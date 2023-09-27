const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        customId: Number,
        fullName: String,
        numOfActions: Number,
    },
    { versionKey: false }

)

// a model is a class with which we contruct documents in collection 
const User = mongoose.model('user', userSchema, 'users')

// in mongoose.model there are 3 arguments
//argument 1: singular name of the collection
//argument 2: schemna Name as established
//argument 3: the collection name i reffer to specifically.

module.exports = User