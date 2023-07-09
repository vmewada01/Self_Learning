const express = require("express");
const { connection } = require("./config/db.js");
const {UserModel}= require("./models/User.model.js")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const new_user = new UserModel({
    email: email,
    password: password
  });
  await new_user.save();
  res.send("Sign up successfully");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await UserModel.findOne({ email, password });

  console.log(result);
  if (result) {
    res.send("LOGIN SUCCESSFULLY");
  } else {
    res.send("LOGIN FAILED");
  }
});

app.listen(8004, () => {
  console.log("listening at port 8004");
});
