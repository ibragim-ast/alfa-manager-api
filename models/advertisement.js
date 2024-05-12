const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
  },
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LedScreen",
    required: true,
  },
});

const Advertisement = mongoose.model("Advertisement", advertisementSchema);
module.exports = Advertisement;
