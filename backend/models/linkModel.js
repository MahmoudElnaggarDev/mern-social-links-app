const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  link_title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Link", linkSchema);
