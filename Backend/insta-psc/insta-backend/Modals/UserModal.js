const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobile: {type: Number, required: true},
    country: {type: String, required: true},
    gender: {type: String, required: true, enum:["Male", "Female", "Unspecified"]},
})

const User = mongoose.model("user", userSchema)

module.exports = {User}