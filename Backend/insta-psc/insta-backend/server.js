const express = require("express")
const {authRouter}= require("./Routes/authRoute")
const app = express();
const cors = require("cors")
require("dotenv").config()
const {User}= require("./Modals/UserModal")
const {connection} = require("./config/db");
const { userRouter } = require("./Routes/UserRoute");

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
 

app.use("/auth", authRouter);

app.use("/profile", userRouter);

//const PORT= process.env.PORT

app.listen(8007,async ()=> {
    try{
        await connection ;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Something went wrong to db")
        console.log(err)

    }
    console.log("Server is running at 8007")
})

