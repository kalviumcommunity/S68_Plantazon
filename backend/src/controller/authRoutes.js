const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
const secret = process.env.private_key;


router.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }


  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });

  res.cookie("auth_token", token, {
    httpOnly: true, 
    secure: false, 
    sameSite: "strict", 
  });

  res.status(200).json({ message: "Login successful" });
});


router.post("/logout", (req, res) => {
 
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;