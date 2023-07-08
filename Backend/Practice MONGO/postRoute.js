const express= require("express")

const postsRoute = express()


postsRoute.post("/create",(req,res)=> {
    
    res.send("post Request made successfully")
})

module.exports ={postsRoute}