const mongoose = require("mongoose");

const Structure = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  drink_type: {
    type: String,
    required: true,
  },
  bottle_type: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("liquors", Structure);
