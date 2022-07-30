const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res
      .status(200)
      .json({ success: true, message: `Welcome Back ${name}` });
  }
  res.status(401).send("Please fill out a name in the form");
});

module.exports = router;
