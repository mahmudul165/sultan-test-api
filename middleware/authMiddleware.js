// const express = require("express");
// const cors = require("cors"); 
//  const app = express();
//  // Enable CORS for all origins
//  app.use(cors());

 
// start
require("dotenv").config();
const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Add the user ID to the request object
    req.userId = decoded.userId;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};



// in "superadmins" table in mongodb i have a data which field name "usename","password".from my frontend i send username and password .if compare true then generate a jwt token for send to request any api of the project.

 
