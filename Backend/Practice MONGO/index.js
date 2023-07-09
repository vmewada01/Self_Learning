const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const validator = (req, res, next) => {
  if (req.method === "POST") {
    if (req.url === "/posts/create") {
      const { id, title, content, author } = req.body;
      if (id && title && content && author) {
        if (
          typeof id === "number" &&
          typeof title === "string" &&
          typeof content === "string" &&
          typeof author === "string"
        ) {
          next();
        } else {
          res.send("Validation Failed");
        }
      } else {
        res.send("validation failed");
      }
    } else {
      res.send("Validation failed");
    }
  } else {
    next();
  }
};

app.use(validator);
const logger = (req, res, next) => {
    const text = `${req.method}, ${req.url}, ${req.headers["user-agent"]}\n`;
    const write = fs.appendFileSync("./logs.txt", text, "utf-8");
    next();
  };
  
  app.use(logger);

 const guard = (req,res,next)=> {
    const {password} = req.query
    console.log(password)
    if(password==="54213"){
     next()
    }else{
        res.send("You are not authorized")
    }
   
 }

 app.use(guard)

app.get("/posts", (req, res) => {
  if (req.method === "GET") {
    let data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
    data = JSON.parse(data).posts;
    console.log("get req made successfully");
    res.send(data);
  }
});

app.post("/posts/create", (req, res) => {
  if (req.method === "POST") {
    let data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
    parsed_data = JSON.parse(data);
    data = parsed_data.posts;
    const payload = req.body;
    // console.log(payload)
    // console.log(data)
    data.push(payload);
    const latest_posts = JSON.stringify(parsed_data);
    //   console.log(latest_posts)
    //   console.log(data)
    fs.writeFileSync("./posts.json", latest_posts, "utf-8");
    res.send("post request made successfully");
  }
});


app.patch("/posts/:postId", (req, res) => {
  const payload = req.body;
  const id = req.params.postId;
  console.log(id);
  let data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
  parsed_data = JSON.parse(data);
  data = parsed_data.posts;
  const update = data.map((item) => {
    if (item.id === Number(id)) {
      return payload;
    } else {
      return item;
    }
  });

  parsed_data.posts = update;

  const latest_posts = JSON.stringify(parsed_data);
  fs.writeFileSync("./posts.json", latest_posts, "utf-8");

  res.send("patch request made successfully");
});

app.delete("/posts/:postId", (req, res) => {
  let id = req.params.postId;
  let data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
  let parsed_data = JSON.parse(data);
  data = parsed_data.posts;

  let filter_post = data.filter((item) => item.id !== Number(id));
  parsed_data.posts = filter_post;
  let latest_posts = JSON.stringify(parsed_data);
  fs.writeFileSync("./posts.json", latest_posts, "utf-8");

  res.send("delete request made successfully");
});



app.listen(8080, () => {
  console.log("Listening at port 8080 ");
});
