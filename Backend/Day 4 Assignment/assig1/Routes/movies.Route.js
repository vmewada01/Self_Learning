const express = require("express")

const moviesRoute = express.Router()

moviesRoute.post("/", (req,res)=> {
 res.send("post request made successfully")
})

module.exports ={moviesRoute}