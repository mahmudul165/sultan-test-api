const express = require("express");
const router = express.Router();

const  {logoutUser } = require("../../controllers/logout.controller");
 
// Login route
router.post('/',logoutUser);

module.exports = router;




