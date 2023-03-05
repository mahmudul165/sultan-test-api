const express = require("express");
const router = express.Router();

const  {login } = require("../../controllers/admin.controller");
 
// Login route
router.post('/',login);

module.exports = router;




