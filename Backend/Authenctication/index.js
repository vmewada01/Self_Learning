const express = require("express");
const { connection } = require("./config/db.js");
const { UserModel } = require("./models/User.model.js");
const app = express();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
//console.log(dotenv.parsed)
app.use(express.json());
var jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    // Store hash in your password DB.

    if (err) {
      res.send("Something went wrong, please signup later");
    }
    const new_user = new UserModel({
      email: email,
      password: hash,
    });
    await new_user.save();
    res.send("Sign up successfully");
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data = await UserModel.findOne({ email });
  const hashed_password = data.password;
  
  bcrypt.compare(password, hashed_password, function (err, result) {
    // result == true
  
    if (result) {
    
      const token = jwt.sign({ email: email }, "abc1234");
      res.send({
        msg: "Login Successfull",
        token: token,
      });
    } else {
      res.send("Login Failed");
    }
  });
});

app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token)
  try {
    var decoded = jwt.verify(token, "abc1234");
    const { email } = decoded;
    console.log(decoded);
    res.send(`Welcome ${email} ! here is your dashboard`);
  } catch (err) {
    console.log(err);
    res.send("Please login ");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening at port " + PORT);
});
