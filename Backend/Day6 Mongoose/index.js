const mongoose = require("mongoose");


const connection =  mongoose.connect("mongodb://127.0.0.1:27017/web24")

const studentModel = mongoose.model("student",mongoose.Schema({
    name: String,
    age: Number,
    course:String
},{versionKey: false}))

module.exports={connection, studentModel}
