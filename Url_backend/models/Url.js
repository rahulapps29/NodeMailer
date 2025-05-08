const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  title: String,
  link: String,
});

module.exports = mongoose.model("Url", urlSchema);
