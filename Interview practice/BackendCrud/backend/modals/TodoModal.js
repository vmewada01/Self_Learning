const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    jobDescription: {type:String, required: true},
    contact: {type: String, required: true}

})

const todoModel = mongoose.model("todo",TodoSchema)

module.exports = {todoModel} 