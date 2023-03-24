const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
    createPressRelease,
    getPressReleases,
    getPressReleaseById,
    updatePressRelease,
    deletePressRelease,
} = require("../../controllers/press.controller");

router.get("/", getPressReleases);
router.get("/:id",  getPressReleaseById);
router.delete("/:id", deletePressRelease);
router.patch("/:id", updatePressRelease);
router.post("/", createPressRelease);

module.exports = router;
