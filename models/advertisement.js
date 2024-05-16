const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  customer: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LedScreen",
    required: true,
    index: true,
  },
});

advertisementSchema.pre("save", function (next) {
  if (this.endDate <= this.startDate) {
    const err = new Error("End date must be greater than start date.");
    next(err);
  } else {
    next();
  }
});

const AdvertisementModel = mongoose.model("Advertisement", advertisementSchema);
module.exports = AdvertisementModel;
