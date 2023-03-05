const express = require("express");
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
router.post("/", createProduct);

module.exports = router;
