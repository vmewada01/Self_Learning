const { connection } = require("./config/db");
const { todo_Model } = require("./models/todos.model");
const { user_Model } = require("./models/User.model");
var jwt = require("jsonwebtoken");

const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

app.post("/todos/signup", async (req, res) => {
  const { email, password } = req.body;
  const payload = {
    email: email,
    password: password,
  };
  const data = await user_Model.insertMany(payload);
  // console.log(data)
  res.send(data);
});

app.post("/todos/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, typeof password);
  const data = await user_Model.findOne({ email });
  console.log(data);
  if (data) {
    const token = jwt.sign({ email: email }, "vishal123");
    res.send({
      msg: "login Successfull",
      token: token,
    });
  } else {
    res.send("please login again");
  }
});

app.get("/", (req, res) => {
  res.send("welcome to the homepage");
});

app.get("/todos", async (req, res) => {
  const token = req.headers.authorization;
  //console.log(token)
  try {
    var decoded = jwt.verify(token, 'vishal123');
    const data = await todo_Model.find();
    res.send(data);

} catch(err) {
    // err
    console.log(err)
    res.send("please login")
  }
  
});

app.patch("/todos/:_id", async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  // console.log(payload)
  const data = await todo_Model.find({ _id }).updateOne(payload);
  console.log(data);
  data.save();
  res.send(data);
});

app.delete("/todos/:_id", async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  const data = await todo_Model.find({ _id }).deleteOne({ _id });

  console.log(data);
  res.send(data);
});

const validation= (req,res,next)=> {
    const {title, note, tags}= req.body;
    if(title && note &&  tags){
      next()
    }
    else{
      res.send("please enter all the mandatory fields")
    }
  }

   app.use(validation)

app.post("/todos/create", async (req, res) => {
  const { title, note, tags } = req.body;
  const payload = {
    title: title,
    note: note,
    tags: tags,
  };

  const data = await todo_Model.insertMany(payload);
  
  res.send(data);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App is listening at port " + PORT);
});
