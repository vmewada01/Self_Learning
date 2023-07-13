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

const authentication = async(req,res,next)=> {
    const token = req.headers?.authorization?.split(" ")[1]
     //console.log(token)
    try {
      var decoded = await jwt.verify(token, "abc1234");
      const { email } = decoded;
      
       req.body.email= email
       next()
    } catch (err) {
      //console.log(err);
      res.send("Please login again");
    }  
}

const authorization =(permittedrole)=> {
 return    async (req,res,next)=> {
        // console.log(req.body.email)
         const email = req.body.email 
         const data =await UserModel.findOne({email})
        
          const role = data.role 
         // console.log(role)
          if(permittedrole.includes(role)){
            next()
          }
          else{
            res.send("You are not authrize for this page.")
          }
        }
        
}


// app.use(authentication)
// app.use(authorization)



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

app.get("/dashboard",authentication, authorization(["Ia"]), (req, res) => {
    res.send(`Welcome xyz sir ! here is your dashboard`);
});


//no authentication , no authorization
app.get("/products", (req,res)=> {
    res.send("here are your products")
})

//authentication, no authorization
app.get("/products/carts", authentication, (req,res)=> {
    res.send("Here are your carts products list")
})

//Authentication, authorization (seller -> permission for this route)
app.post("/products/create", authentication, authorization(["seller"]), async (req, res) => {
    res.send("Product created")
       
})

//authorization (customer --> permission for this route)
app.post("/productsFeedback", authentication, authorization(["customer"]), async (req, res) => {
    res.send("Product Feedback taken")
})


app.post("/assignments/edit", authentication, authorization(["ia", "instructor"]), (req, res) => {
    res.send("edited")
})


const PORT = process.env.PORT || 3008

app.listen(PORT, async() => {
    try{
      await connection 
      console.log("connected to db succesfully")
    }
    catch(err){
        console.log("something went wrong")
        console.log(err)
    }
  console.log("listening at port " + PORT);
});
