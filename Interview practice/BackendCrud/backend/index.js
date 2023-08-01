

const express = require("express")
const cors = require("cors")
const { todoRouter } = require("./Routes/Todo.Routes")
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("Welcome to the homepage")
})

app.use("/todo",todoRouter)


app.listen(8000,async()=> {
    try{
        await connection
        console.log("connected to DB successfully")
       

    }
    catch(err){
        console.log(err)
    }
    console.log("listening at port 8000")
})

