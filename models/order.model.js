const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    email: {
      type: String,
       required: true,
    },
    name: {
      type: String,
       required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    //   required: true,
    },
     
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        // required: true,
      },
    ],
    totalItems: {
      type: Number,
       required: true,
    },
    totalUniqueItems: {
      type: Number,
    //   required: true,
    },
    cartTotal: {
      type: Number,
    //   required: true,
    },
    status: {
      type: String,
      enum: ["placed", "shipped", "delivered", "cancelled",'pending'],
      default: "placed",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

// write a mongoose schema schema where email,name,phone,address,products(relational) ,totalItems,totalUniqueItems,cartTotal,status,orderDate,timestamps post request from client side to save as order.
