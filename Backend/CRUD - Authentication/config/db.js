const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web25");

const todoModel = mongoose.model("todo",mongoose.Schema({
   id: Number,
   completed: Boolean,
   title: String 
},{versionKey: false}))

const userModel= mongoose.model("user", mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, require: true}
}))



module.exports = { connection, todoModel , userModel };
