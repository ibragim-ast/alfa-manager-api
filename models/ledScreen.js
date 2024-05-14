const mongoose = require("mongoose");

const ledScreenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  location: {
    type: String,
    required: true,
    maxlength: 100,
  },
  blockDuration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  advertisements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Advertisement",
    },
  ],
});

const LedScreenModel = mongoose.model("LedScreen", ledScreenSchema);
module.exports = LedScreenModel;
