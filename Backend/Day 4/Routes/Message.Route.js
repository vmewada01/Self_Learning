const express = require("express")

const messageRoute = express.Router()

messageRoute.get("/", (req,res)=> {
    console.log("Welcome to the message home page")
})

messageRoute.get("/about", (req,res)=> {
    console.log("Welcome to the about page")
})

messageRoute.get("/login", (req,res)=> {
    console.log("Welcome to the login")
})


module.exports = {messageRoute}
