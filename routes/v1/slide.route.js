const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
  getAllSlides,
  createSlide,
  getSlideById,
  deleteSlide,
  updateSlide,
} = require("../../controllers/slide.controller");

router.get("/",getAllSlides);
router.get("/:id", getSlideById);
router.delete("/:id" ,authMiddleware, deleteSlide);
router.patch("/:id" , authMiddleware, updateSlide);
router.post("/" , authMiddleware, createSlide);

module.exports = router;
