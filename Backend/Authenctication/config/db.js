const mongoose = require("mongoose")
const dotenv= require("dotenv").config()
const DB= "mongodb+srv://vishalmewada9826:Vishal@123@cluster0.e9utouv.mongodb.net/"

const connection = mongoose.connect(process.env.MONGODB_URL)


module.exports={
    connection
}