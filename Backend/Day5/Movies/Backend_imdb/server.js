const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/web24",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;

const movieSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    genre: String
})

const Movie = mongoose.model("Movie", movieSchema);

app.post("/movies",(req,res)=> {

    const {title, rating, genre} = req.body;
    console.log(title)
    const movie = new Movie({title,rating,genre});
movie.save((err,savedMovie)=> {
    if(err){
        res.status(500).json({error: err.message});
    }
    else{
        res.status(201).json(savedMovie)
    }
})

})

app.get("/movies", (req,res)=> {
    const {title, rating,q, sortBy,page, limit}= req.query
    const query ={}
    if(q){
        query.title = { $regex: q, $options: "i"}
    }    
    Movie.find(query).exec((err,movies)=> {
        if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json(movies);
          }  
    })
})

app.listen(8000,()=> {
    console.log("server is running on port 8000")
})