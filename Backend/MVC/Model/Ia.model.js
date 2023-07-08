const mongoose = require("mongoose")

const IaSchema= new mongoose.Schema({
    name: String,
    age: Number,
    course: String
})

const Ia = mongoose.model("ia",IaSchema)

module.exports = {Ia}
