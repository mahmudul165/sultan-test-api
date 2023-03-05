const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  altText: { type: String },
});

const discountSchema = new mongoose.Schema({
  amount: { type: String },
  type: { type: String, enum: ["percentage", "fixed"],  },
});

const promoSchema = new mongoose.Schema({
  code: { type: String },
  expiresAt: { type: Date},
});

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [imageSchema] },
  discount: discountSchema,
  promo: promoSchema,
  stockStatus: {
    type: String,
    enum: ["in_stock", "out_of_stock", "limited"],
    default: "in_stock",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre('save', async function (next) {
  const product = this;
  if (!product.id) {
    product.id = await Product.countDocuments() + 1;
  }
  next();
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
