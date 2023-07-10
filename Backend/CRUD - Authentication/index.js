const express = require("express");
const { connection, todoModel, userModel } = require("./config/db.js");
const app = express();
app.use(express.json());
const bcrypt= require("bcrypt")
var jwt = require("jsonwebtoken");
var jwt = require('jsonwebtoken');

app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

app.get("/products", async (req, res) => {
    const token = req.headers.authorization
    console.log(token)
    try {
        var decoded = jwt.verify(token, 'abc1234');
        console.log(decoded)
        const data = await todoModel.find();
        //console.log(data);
        res.send(data);

      } catch(err) {
        // err
        console.log(err)
        res.send("Please login")
      }

});
app.post("/products/todo", async (req, res) => {
  const { id, title, completed } = req.body;
  console.log(id, title, completed);

  const payload = {
    id: id,
    title: title,
    completed: completed,
  };
  const data = await todoModel.insertMany([payload]);
  // console.log(data)
  res.send(data);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  //console.log(id)
  const data = await todoModel.deleteOne({ id });
  // console.log(data)
  res.send(data);
});
app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const data = await todoModel.find({ id }).updateOne(payload);
  // console.log(data)
  res.send(data);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const data = await todoModel.find({ id }).updateOne(payload);
  //console.log(data)
  res.send(data);
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 5, async function(err, hash) {
    // Store hash in your password DB.
 if(err){
    res.send("something went wrong ,please signup")
 }
   const new_user = new userModel({
    email: email,
    password: hash
   })
   //console.log(hash)
   await new_user.save();
   res.send("Sign up successfully")

});
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data= await userModel.findOne({email});
  const hashed_password = data.password

  bcrypt.compare(password, hashed_password, function(err, result) {
    // result == true
    if(result){
        var token = jwt.sign({ email: email }, 'abc1234');
       // console.log(token)
        res.send({
            "msg":"Login Successfull",
            "token": token
        })
    }else{
        res.send("Login Failed")
    }
});

});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
