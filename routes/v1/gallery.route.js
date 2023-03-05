const express = require("express");
const router = express.Router();

const {
  getAllGallery,
  createGallery,
  getOneGallery,
  deleteGallery,
  updateGallery,
} = require("../../controllers/gallery.controller");

router.get("/", getAllGallery);
router.get("/:id", getOneGallery);
router.delete("/:id", deleteGallery);
router.patch("/:id", updateGallery);
router.post("/", createGallery);

module.exports = router;
