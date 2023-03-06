const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id",authMiddleware, deleteProduct);
router.patch("/:id", authMiddleware,updateProduct);
router.post("/",authMiddleware, createProduct);

module.exports = router;
