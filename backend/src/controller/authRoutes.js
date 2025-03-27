const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
const secret = process.env.private_key;

// Login endpoint
router.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  // Generate a token
  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });

  // Set the token in a cookie
  res.cookie("auth_token", token, { httpOnly: true, secure: false, sameSite: "strict" });
  res.status(200).json({ message: "Login successful" });
});

// Logout endpoint
router.post("/logout", (req, res) => {
  // Clear the auth cookie
  res.clearCookie("auth_token", { httpOnly: true, secure: false, sameSite: "strict" });
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;