const mongoose = require("mongoose")
require("dotenv").config()


// mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

// wrong url - mongodb+srv://vishalmewada9826:vishal123@cluster0.e9utouv.mongodb.net/backend_psc?retryWrites=true&w=majority

const connection =  mongoose.connect("mongodb+srv://vishal9826:vishal123@cluster0.it8us87.mongodb.net/backend_psc?retryWrites=true&w=majority")


module.exports= {connection}

