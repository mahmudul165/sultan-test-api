 
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Superadmin = require("../models/superadmin.model");

// // Secret key for JWT
// require("dotenv").config();
// const JWT_SECRET = process.env.JWT_SECRET;
// const expiresIn = process.env.expiresIn;
// exports.login = async (req, res) => {
//   // const { username, password } = req.body;
//   console.log(" pssword", username, password);

//   try {
//     // Find the superadmin with the given username
//     const superadmin = await Superadmin.findOne({ username });

//     if (!superadmin) {
//       return res.status(401).json({ message: "Invalid username credentials" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, superadmin.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid password credentials" });
//     }

//     // Generate a JWT token with the superadmin ID
//     const token = jwt.sign({ userId: superadmin._id }, JWT_SECRET, {
//       expiresIn,
//     });
//     const name = superadmin.username;
//     res.json({ status: "success", message: "successfully login", name, token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };







// const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");
// const Superadmin = require("../models/superadmin.model");

// // Secret key for JWT
//  require("dotenv").config();
 
// const JWT_SECRET = process.env.JWT_SECRET;
// // console.log('first',JWT_SECRET);
// const expiresIn = "7d";
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   // console.log(" pssword", username, password);

//   try {
//     // Find the superadmin with the given username
//     const superadmin = await Superadmin.findOne({ username });

//     if (!superadmin) {
//       return res.status(401).json({ message: "Invalid username credentials" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await argon2.verify(superadmin.password, password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid password credentials" });
//     }

//     // Generate a JWT token with the superadmin ID
//     const token = jwt.sign({ userId: superadmin._id }, JWT_SECRET, {
//       expiresIn,
//     });
//     const name = superadmin.username;
//     res.json({ status: "success", message: "successfully login", name, token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

 
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Superadmin = require("../models/admin.model");

const JWT_SECRET = process.env.JWT_SECRET;
const expiresIn = process.env.EXPIRES_IN;

exports.login = async (req, res) => {
  const { username, password } = req.body;
  // console.log("JWT_SECRET ,expiresIn ",JWT_SECRET ,expiresIn );
  try {
    // Find the superadmin with the given username
    const superadmin = await Superadmin.findOne({ username });

    if (!superadmin) {
      return res.status(401).json({ message: "Invalid username credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, superadmin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password credentials" });
    }

    // Generate a JWT token with the superadmin ID
    const token = jwt.sign({ userId: superadmin._id }, JWT_SECRET, {
      expiresIn,
    });
    const name = superadmin.username;
    res.json({ status: "success", message: "successfully login", name, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
