const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userID: { type: String, require },
    orderItem: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    isDelivered: { type: boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
