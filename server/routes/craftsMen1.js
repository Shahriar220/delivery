const express = require("express");
const router = express.Router();

router
  .route("https://todn22mvx9.execute-api.ap-south-1.amazonaws.com/dev/access")
  .post(async (res, res) => {
    res.status(200).json({ message: "success" });
  });

router
  .route(
    "https://todn22mvx9.execute-api.ap-south-1.amazonaws.com/dev/access?email=shahriar.uchchash@gmail.com"
  )
  .get(async (req, res) => {
    res.status(200).json(res);
  });
