const mongoose = require("mongoose");

const todo_Schema= new mongoose.Schema({
    title: String,
    note: String,
    tags: String
})


const todo_Model = mongoose.model("todo_data",todo_Schema)


module.exports= {todo_Model}