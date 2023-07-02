const express   = require("express")
const {moviesRoute} = require("./Routes/movies.Route")


const app = express()

app.use(express.json())
app.use(express.text())
// app.get("/", (req,res)=> {
//     res.send("welcome to the homepage")
// })

 app.use((req,res,next)=> {
    console.log(req.body)
   const data = JSON.stringify(req.body)
    console.log(JSON.parse(data.id))
    if(
        typeof req.id ==Number   && typeof req.name ==string &&  typeof req.rating ==Number && typeof req.description == stinrg && typeof req.genre ==string  && typeof req.cast == string
      ){
        res.send("request made succesfully with all check ")
      }
      else {
        res.status(400).send("Value type is not exit")
      }
      next()
 })

app.post("/movies" , moviesRoute)

app.listen(8080, ()=> {
 console.log("server is running at port 8080")
})