const express = require("express");
const router = express.Router();

const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../../controllers/contact.controller");

router.get("/",  getAllContacts);
router.get("/:id",  getContactById);
router.delete("/:id",deleteContactById);
router.patch("/:id",  updateContactById);
router.post("/",  createContact);

module.exports = router;
