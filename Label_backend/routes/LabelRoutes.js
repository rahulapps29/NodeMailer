// routes/labelRoutes.js

const express = require("express");
const router = express.Router();
const { getLabels, updateLabels } = require("../data/label");

router.get("/", (req, res) => {
  res.send("Server is runnning ");
});

router.get("/labels", (req, res) => {
  res.json(getLabels());
});

router.post("/labels", (req, res) => {
  const { updatedLabels } = req.body;
  if (Array.isArray(updatedLabels) && updatedLabels.length === 24) {
    updateLabels(updatedLabels);
    res.status(200).json({ message: "Labels updated successfully." });
  } else {
    res.status(400).json({ message: "Invalid data. Must send 24 labels." });
  }
});

module.exports = router;
