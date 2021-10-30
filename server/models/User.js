const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: String, required: true, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
