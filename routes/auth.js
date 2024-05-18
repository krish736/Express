const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json(name);
  } else {
    res.status(401).send("Please provide a name!");
  }
});

module.exports = router