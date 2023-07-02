const express = require("express")

const employeesRoute = express.Router()

employeesRoute.get("/", (req,res)=> {
    console.log("Welcome to the message home page")
})

employeesRoute.get("/about", (req,res)=> {
    console.log("Welcome to the about page")
})

employeesRoute.get("/login", (req,res)=> {
    console.log("Welcome to the login")
})


module.exports = {employeesRoute}
