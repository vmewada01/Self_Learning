const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


const connection = mongoose.connect("mongodb+srv://vishal9826:vishal123@cluster0.it8us87.mongodb.net/insta_psc?retryWrites=true&w=majority")


module.exports= {connection}