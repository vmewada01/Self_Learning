 const express = require("express")
const fs = require("fs")
 const app = express()
 const messageRoute = require("./Routes/Message.Route")
 const employeesRoute = require("./Routes/Employees.Route")
 
//  app.use(express.urlencoded({extended: true}))
// app.use(express.json())



const timeLogger =((req,res,next) => {
    //startTime
    const startTime = new Date().getTime()
   // console.log(startTime)
   // console.log(`the method is ${req.method} and url is ${req.url}`)
    next()
    const EndTime = new Date().getTime()
   // console.log(EndTime)
   const total = EndTime -startTime 
    console.log(total+ "ms")
    let str=""
    str  +=total 
  const file  =fs.appendFileSync("./logger.txt",   JSON.stringify(str))
   // console.log(file)
})

app.use(timeLogger)


app.get("/",(req,res)=> { 
    
    console.log("Welcome to the home page")
})

app.get("/product",(req, res)=> {
  res.send("hello welcome to product page")
})

app.get("/about" ,(req,res) => {
    res.send("hello welcome to about page ");

})


app.listen(8080, ()=> {
    console.log("server is running fine..!!")
})
