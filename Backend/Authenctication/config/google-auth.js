
const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require("dotenv").config()
const passport = require("passport");
const { UserModel } = require('../models/User.model');
const { v4: uuidv4 } = require('uuid');


passport.use(new GoogleStrategy({
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    passReqToCallback   : true
  },
 async function(request, accessToken, refreshToken, profile, done) {
     //console.log(profile._json.email)
     const email = profile._json.email 
     const user = new UserModel({
        email,
        password: uuidv4()
     })
     await user.save()

      return done(null, "user");


  }
));

module.exports={passport}