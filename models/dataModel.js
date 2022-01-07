const { text } = require("express");
const mongoose = require("mongoose");
const textSearch = require("mongoose-partial-full-search");
const dataSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Code: {
    type: String,
  },
});

dataSchema.index({ Name: "text" });
dataSchema.plugin(textSearch);
const Countries = mongoose.model("Countries", dataSchema);

module.exports = Countries;
