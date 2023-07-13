const express = require("express");
const { connection } = require("./Config/db");
const dotenv = require("dotenv").config();
const { UserModel } = require("./Models/UserModel");
const bcrypt = require("bcrypt");
const app = express();

const jwt = require("jsonwebtoken");
const { authentication } = require("./Middlewares/authentication");
const { BmiModel } = require("./Models/BMIModel");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // console.log('hii')
  res.send("Welcome to homepage");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const isUser =await  UserModel.findOne({ email });
 console.log(isUser)
  if (isUser) {
    res.send({ msg: "User already exists, try logging in" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      const new_user = new UserModel({
        name,
        email,
        password: hash,
      });
      console.log(new_user)
      try {
        await new_user.save();
        console.log(new_user);
        res.send({ msg: "Signup Successfully" });
      } catch (err) {
        res.send({ msg: "Something went wrong please try after sometimes" });
      }
    });
  }
  // console.log(name,email,password)
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  //console.log(user)
  const hashed_password = user.password;
  bcrypt.compare(password, hashed_password, async function (err, result) {
    if (result) {
      const token = await jwt.sign({ _id: user._id }, "vishal");
      res.send({
        msg: "login Succesfull",
        token: token,
      });
    } else {
      res.send({
        msg: "Login failed , please try Again",
      });
    }
  });
});

app.get("/getProfile", authentication, async (req, res) => {
  const { _id } = req.body;
  const user = await UserModel.findOne({_id});
  if (user) {
    const name = user.name;
    const email = user.email;
    res.send({
      name,
      email,
    });
  } else {
    res.send({ msg: "please login" });
  }
});

app.post("/calculateBMI", authentication, async (req, res) => {
  const { height, weight, _id } = req.body;
  const height_in_metre = Number(height) * 0.3048;
  const BMI = Number(weight) / height_in_metre ** 2;
  const new_BMI = new BmiModel({
    height: height_in_metre,
    weight,
    user_id: req.body._id,
    BMI,
  });
  await new_BMI.save();
  res.send({
    BMI: BMI,
  });
});

app.get("/getCalculation", authentication, async (req, res) => {
  const { _id } = req.body;
  const all_bmi = await BmiModel.find({ user_id: _id });
  // console.log(all_bmi)
  res.send({
    History_BMI: all_bmi,
  });
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to mongo atlas");
  } catch (err) {
    console.log("something went wrong");
    console.log(err);
  }
  console.log("server is running at port 8000");
});
