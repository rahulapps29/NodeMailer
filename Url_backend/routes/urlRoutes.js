const express = require("express");
const Url = require("../models/Url");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const { title, link } = req.body;
  const newUrl = new Url({ title, link });
  await newUrl.save();
  res.json(newUrl);
});

// Read
router.get("/", async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
});

router.get("/test", (req, res) => {
  res.send("Server is runnning");
});

// Update
router.put("/:id", async (req, res) => {
  const { title, link } = req.body;
  const updated = await Url.findByIdAndUpdate(
    req.params.id,
    { title, link },
    { new: true }
  );
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Url.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
