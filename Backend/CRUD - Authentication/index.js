const express = require("express");
const { connection, todoModel, userModel } = require("./config/db.js");
const app = express();
app.use(express.json());
const bcrypt= require("bcrypt")
var jwt = require("jsonwebtoken");
const argon2 = require('argon2');
const axios = require("axios")

app.get("/", (req, res) => {
 return  res.sendFile(__dirname+ "/index.html")
});

const CLIENT_ID="3f3c8fa38ae0a906ca08"
const CLIENT_SECRET="0b3818b66a8268919e9b95be3211ff5c2f616d30"

app.get("/github/callback", async(req,res)=> {
  const code= req.query.code;

  const accessToken= await axios.post(`https://github.com/login/oauth/access_token`,null,
  {
    params: {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
  },
  headers: {
    accept: "application/json"
  },
  
}).catch(console.error)
console.log("Acess", accessToken)

const userdata = await axios.get("https://api.github.com/user",{
  headers: {
   Authorization: `Bearer ${accessToken.data.access_token}`
  },
}).catch(console.error);

console.log("Git hub user data", userdata)
  
  res.send("Sign in with github success");
})



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

 // bcrypt.hash(password, 5, async function(err, hash) {
    // Store hash in your password DB.
    const hash = await argon2.hash(password)
//  if(err){
//     res.send("something went wrong ,please signup")
//  }
   const new_user = new userModel({
    email: email,
    password: hash
   })
   //console.log(hash)
   await new_user.save();
   res.send("Sign up successfully")

});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data= await userModel.findOne({email});
  const hashed_password = data.password

  //bcrypt.compare(password, hashed_password, function(err, result) {
    // result == true

const verification = await argon2.verify(hashed_password,password)
console.log("verification", verification)

    if(verification){
        var token = jwt.sign({ email: email }, 'abc1234',{expiresIn: 60*60});
       // console.log(token)
        res.send({
            "msg":"Login Successfull",
            "token": token
        })
    }else{
        res.send("Login Failed")
    }
});



app.listen(3000, () => {
  console.log("listening at port 3000");
});
