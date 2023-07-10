const express = require("express")
const {connection} = require("./config/db")
const {Student}= require("./Model/Student.model")
const {Ia} = require("./Model/Ia.model");
const { studentRouter } = require("./routes/student.route");
const { iaRouter } = require("./routes/ias.route");
const dotenv= require("dotenv").config()


const app = express();
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("API Home page , Try other routes")
})

app.use("/students", studentRouter)

app.use("/ias",iaRouter)


const PORT= process.env.PORT || 8004

app.listen(PORT, async()=> {
    try{
        await connection 
        console.log("Connected to the Db successfully")

    }
    catch(err){
        console.log("error in some parts check it ")

        console.log(err)

    }
    console.log("server is running at port "+ PORT)
})