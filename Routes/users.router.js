const express = require("express");
const userModel = require("../Models/user.models");
const bcrypt = require("bcrypt");

// JWT Function Utils me se import kia
const { generateToken } = require('../Utils/generateToken')
// Register user importing 
const { registerUser, loginUser, logout } = require("../Controllers/authControler");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users url working");
});

// Registering User
router.post("/register",registerUser);

// Login User
router.post("/login", loginUser);

// Logout User
router.get("/logout", logout);

module.exports = router;
