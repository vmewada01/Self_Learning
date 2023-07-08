const express = require("express");

const fs = require("fs")

const app = express();
app.use(express.json());

const logger = (req,res,next)=> {
    const {method,url, headers}= req
    const log = `${method},${url} ,${userAgent}\n`
    fs.appendFile('./logs.txt',log,(err)=>{
        if(err){
            console.log("error in writing log file")
        }
    })
    next()
}

const guard = (req,res,next)=> {
    const pass= req.query.password;
    if(pass=='54213'){
        next();
    }else{
        res.status(401).send("You are not authorized")
    }
}

const validator = (req,res,next)=> {
    if(req.method==="POST"){
        const {id, title,content,author}= req.body 
        if((typeof id ==Number) &&(typeof title ==String) &&(typeof content ==String) &&(typeof author ==String)  ) {
            next()
        } else{
            res.send("Validation Failed")
        }
    } 
}

// app.use("/product", menproduct);


app.post("/posts", (req, res) => {
    const {id, title,content,author}= req.body 
    console.log(req.body)
    const newPost = {id,title,content,author}
 fs.readFileSync("./posts.json",(err,posts)=> {
    if(err){
        console.log("error")
        res.status(500).send('internal server error')
    }else{
        let post = JSON.parse(posts)
        post.push(newPost)
        fs.writeFileSync("./posts.json",JSON.stringify(posts,null,2)),(err=> {
          if(err)  {
            console.log(err)
          }else{
            res.status(201).json(newPost)
          }
        })
    }
 })
     
    // console.log(JSON.stringify(data.posts))
    console.log("req made successfully")
    // fs.appendFileSync("./posts.json", JSON.stringify(req.body))
    res.send("request made successfully");
});

app.get("/posts", (req, res) => {
 fs.readFileSync("./posts.json",(err,posts)=> {
    if(err){
        console.log(err)
    }else{
      const  post = JSON.parse(posts)
        res.json(post)

    }
 })
    const post= JSON.parse(posts)
   res.json(post);
 
 });


app.delete("/posts/:id", (req,res)=>{
    const {id} = req.params 
    const data = fs.readFileSync("./posts.json", "application/json" )

    const filterItem = data.filter((item)=> +(item.id)==Number(id) )
    if(filterItem){
      res.json(user)
    }else{
        res.status(404).json({error: "user not found"})

    }

})

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
