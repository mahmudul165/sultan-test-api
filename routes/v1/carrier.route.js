const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
  getJobPostings,
 createJobPosting,
  getJobPostingById,
  deleteJobPosting,
  updateJobPosting,
} = require("../../controllers/carrier.controller");

router.get("/",   getJobPostings);
router.get("/:id", getJobPostingById);
router.delete("/:id",authMiddleware,deleteJobPosting);
router.patch("/:id", authMiddleware,updateJobPosting);
router.post("/", authMiddleware, createJobPosting);

module.exports = router;
