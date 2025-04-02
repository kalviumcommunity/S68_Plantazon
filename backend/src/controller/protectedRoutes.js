const express = require("express");
const auth = require("../middleware/auth"); 
const router = express.Router();


router.get("/dashboard", auth, (req, res) => {
  res.status(200).json({
    message: `Welcome to your dashboard, ${req.user.username}!`,
  });
});

module.exports = router;