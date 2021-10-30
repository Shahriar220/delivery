//const mongoose=require('mongoose')
const Order = require("../models/Order");
const express = require("express");
const router = express.Router();

router.route("/order").post(async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    newOrder.save();
    res.status(200).json({ message: "successfull" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});
