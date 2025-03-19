const jwt = require("jsonwebtoken"); 
require("dotenv").config(); 
const auth = (req, res, next) => {
  const tokenauth = req.headers.authorization;
  
  if (!tokenauth || !tokenauth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = tokenauth.split(" ")[1]; 
  const secret = process.env.private_key; 

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error("Error in auth middleware:", err);
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; 
    next();
  });
};

module.exports = auth;