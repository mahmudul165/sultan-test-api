const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
  getAllGallery,
  createGallery,
  getOneGallery,
  deleteGallery,
  updateGallery,
} = require("../../controllers/gallery.controller");

router.get("/", getAllGallery);
router.get("/:id", getOneGallery);
router.delete("/:id",authMiddleware, deleteGallery);
router.patch("/:id", authMiddleware,updateGallery);
router.post("/",authMiddleware, createGallery);

module.exports = router;
