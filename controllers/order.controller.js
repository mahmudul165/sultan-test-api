const Order = require("../models/order.model");

// CREATE a new order
exports.createOrder = async (req, res) => {
  try {
    //console.log('order req boday',req.body)
    const order = new Order(req.body
    //   {
    //   email: req.body.email,
    //   name: req.body.name,
    //   phone: req.body.phone,
    //   address: req.body.address,
    //   products: req.body.products,
    //   totalItems: req.body.totalItems,
    //   totalUniqueItems: req.body.totalUniqueItems,
    //   cartTotal: req.body.cartTotal,
    //   status: req.body.status,
    //   orderDate: req.body.orderDate,
    // }
    
    );
    console.log('order req boday',order)
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ one order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("products");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE an existing order by ID
exports.updateOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        products: req.body.products,
        totalItems: req.body.totalItems,
        totalUniqueItems: req.body.totalUniqueItems,
        cartTotal: req.body.cartTotal,
        status: req.body.status,
        orderDate: req.body.orderDate,
      },
      { new: true }
    ).populate("products");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE an existing order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
