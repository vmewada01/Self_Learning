const express = require("express")

const app = express()
app.use((req,res,next)=> {
    if(req.url==="/"){
        res.send("welcome to the homepage")

    }
    else if(req.query==movie){
        res.send("are you looking to search for a movie")
    }
    next()
})



app.get("/products", (req,res)=> {
    res.send("welcome to the products")
})

app.listen(8080,()=> {
    console.log("App is working fine at port 8080")
})
