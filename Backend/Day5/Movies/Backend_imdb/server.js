const express = require("express")
const {connection,MovieDetail} = require("./index.js")

const app = express()

app.get("/",(req,res)=> {
    res.send("Welcome to the homepage.!")
})

app.get("/movies", async(req,res)=> {
console.log("req made successfully")
const data = req.body 
const movie_info = await MovieDetail.find()
res.send(movie_info)

    res.send("welcome to the moviesPage")
})

app.post("./addmovie", async(req,res)=> {
     console.log("req made successfully")
     const data = req.body 
    const movie_list = await MovieDetail(data)
    await movie_list.save()
    res.send(movie_list) 
})


app.listen(8080,async()=> {
    try{
        await connection
        console.log("connected successfully")
    }catch(err){
        console.log(err)
    }
    console.log("App is working fine at port 8080")
})
