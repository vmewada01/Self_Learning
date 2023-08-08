const { Router } = require("express");
const { User } = require("../Modals/UserModal");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")

const authRouter = Router();


authRouter.post("/signup", async(req, res) => {
  const { username,name, email, password, mobile, country, gender } = req.body;
  const isUser =await  User.findOne({ email });
 // console.log(isUser)
   if (isUser) {
     res.send({ msg: "User already exists, try logging in" });
   }
else{
    bcrypt.hash(password, 5, async function (err, hash) {
        const new_user = new User({
          name,
          username,
          email,
          password: hash,
          mobile,
          country,
          gender,
        });
        try {
            await new_user.save();
            console.log(new_user);
            res.status(201).send({ msg: "Signup Successfully" });
          } catch (err) {
            res.status(500).send({ msg: "Something went wrong please try after sometimes" });
          }
      });
}

 
});

authRouter.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
   // console.log(user)
   try{
    const hashed_password = user.password;
    bcrypt.compare(password, hashed_password, async function (err, result) {
      if (result) {
        const token = await jwt.sign({ _id: user._id }, "vishal");
        res.send({
          msg: "login Succesfull",
          token: token,
        });
      } else {
        res.status(401).send({
          msg: "Login failed , please try Again",
        });
      }
    });
   }catch(err){
    console.log(err)
    res.status(401).send({msg: "something went wrong"})
   }
    
});

module.exports = { authRouter };
