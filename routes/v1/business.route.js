const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
  getPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
} = require("../../controllers/business.controller");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.delete("/:id",authMiddleware, deletePost);
router.patch("/:id",authMiddleware, updatePost);
router.post("/",authMiddleware, createPost);

module.exports = router;
