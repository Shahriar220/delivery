const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.route("/register").post(async (req, res) => {
  const { name, email, password } = req.body;
  const newuser = new User({
    name,
    email,
    password,
  });
  try {
    newuser.save();
    res.status(200).send("registration Successfull");
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.route("/login").post(async (req, res) => {
  const { emai, password } = req.body;
  try {
    const user = await User.find({ emai, password });
    if (!user) res.send({ message: "Not registered" });
    else {
      const current = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(current);
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
