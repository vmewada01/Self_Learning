const dotenv = require("dotenv").config();
require("dotenv").config()
const jwt = require("jsonwebtoken");

const authentication =  (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
  // console.log(token)
    try {
      var decoded =  jwt.verify(token, "vishal");
      //console.log(decoded)
      const { _id } = decoded;
      if (decoded) {
        req.body._id = _id;
        next();
      } 
    } catch (err) {
      console.log(err);
      res.send({
        msg: "Please Login again.",
      });
    }
  };

  module.exports ={authentication}