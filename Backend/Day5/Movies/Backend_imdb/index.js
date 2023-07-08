const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web24")

const MovieDetail = mongoose.model("movie", mongoose.Schema({
   movie_name: String,
   release_date: Number,
   details: String,
   director: String
    
},{versionKey: false}))

module.exports = {connection, MovieDetail}
