const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
  getPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
} = require("../../controllers/brand.controller");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);
router.post("/", createPost);

module.exports = router;
