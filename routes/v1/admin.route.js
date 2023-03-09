const express = require("express");
const router = express.Router();

const  {login,getAlluser,getUserById ,deleteUser,updateUser} = require("../../controllers/admin.controller");
 
// Login route
router.post('/',login);
router.get('/',getAlluser);
router.get("/:id", getUserById); 
router.delete("/:id",deleteUser);
router.patch("/:id" ,updateUser);
 
module.exports = router;




