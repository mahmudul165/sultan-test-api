const express = require("express");
const router = express.Router();

const {
  getJobPostings,
 createJobPosting,
  getJobPostingById,
  deleteJobPosting,
  updateJobPosting,
} = require("../../controllers/carrier.controller");

router.get("/", getJobPostings);
router.get("/:id", getJobPostingById);
router.delete("/:id", deleteJobPosting);
router.patch("/:id", updateJobPosting);
router.post("/",createJobPosting);

module.exports = router;
