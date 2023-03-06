require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.logoutUser = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.clearCookie('jwt').status(200).json({ message: 'Logout successful' });
  });
}