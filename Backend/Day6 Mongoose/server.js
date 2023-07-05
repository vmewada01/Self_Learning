const express = require("express")
const {connection,studentModel} = require("./index")

const app = express()
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("welcome to the homepage")
})

app.get("/about",(req,res)=> {
    res.send("welcome to the about page")
})

app.get("/students", async(req,res)=> {
    const results = await studentModel.find()
    res.send(results)
})

app.post("./addStudent", async(req,res)=> {
    console.log("req.made successfully")
    const data = req.body 
    const student = await studentModel(data)
    await student.save()
    res.send(student)
})




app.listen(8080,async()=> {
    // console.log("server is running at port 8080")
   try{
    await connection 
    console.log("Connected to db Successfully")
   }
    
    catch(err){
       console.log(err)
    }
    console.log("listening to port 8080")
})