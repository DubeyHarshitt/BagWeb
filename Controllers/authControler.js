const userModel = require("../Models/user.models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// JWT Function Utils me se import kia
const { generateToken } = require('../Utils/generateToken')

module.exports.registerUser =  async (req, res) => {
    try {``
      let { fullname, email, password } = req.body;

      let user = await userModel.findOne({email: email});
      if(user) return res.status(401).send("User Already Exists, Please Login");
  
      // Hashing Password
      bcrypt.genSalt(10, (err, salt)=>{
          bcrypt.hash(password, salt, async (err, hash)=>{
              if(err) return res.send(err.message);
              else {
                  let user = await userModel.create({
                      fullname,
                      email,
                      password : hash,
                    });
  
                  //   Creating JSON Web Token (moved to UTILS)
                  let token = generateToken(user);
                  res.cookie("token",token); // (User k browser pe token set kr rhe)
  
                //   res.status(201).send("User Created");
                res.render("shop");
              }
          })
      });
    } catch (error) {
      res.send(error.message);
    }
  };


module.exports.loginUser = async (req, res) => {

    const { email , password } = req.body; 

    // Checking email and comparing password
    let user = await userModel.findOne({email: email})
    if(!user) return res.status(400).send("Wrong Email or Password");
    
    // Comparing Password
    bcrypt.compare( req.body.password, user.password, (err, result)=>{
        if(result) {
            // creating cookie jwt on password match (generate token middleware ka use kia)
            let token = generateToken(user);
            res.cookie("token", token);

            // sending response
            // res.send("You can login");
            res.redirect("/shop");
        }
        else res.status(400).send("Wrong Email or Password");
      });
}

module.exports.logout = async (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
}