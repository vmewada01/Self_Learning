const mongoose = require("mongoose");


const user_Schema= new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
  })


const user_Model = mongoose.model("user_data",user_Schema)


module.exports= {user_Model}