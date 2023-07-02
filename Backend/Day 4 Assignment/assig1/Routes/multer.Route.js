const express = require("express")

const multerRoute = express.Router()

multerRoute.post("/formdata", (req,res)=> {
 res.send("post request made successfully")
})

module.exports ={multerRoute}