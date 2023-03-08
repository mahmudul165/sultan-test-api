const express = require("express");
const router = express.Router();

const {  
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById
} = require("../../controllers/order.controller");

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", deleteOrderById);
router.patch("/:id", updateOrderById);
router.post("/",createOrder);

module.exports = router;
