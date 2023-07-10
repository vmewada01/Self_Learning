const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
//console.log(process.env.MONGO_DB_URL)
const connection = mongoose.connect(process.env.MONGO_DB_URL)

module.exports={
    connection
}