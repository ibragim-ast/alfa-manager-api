const mongoose = require("mongoose");

const ledScreenSchema = new mongoose.Schema({
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

const LedScreen = mongoose.model("ledScreen", ledScreenSchema);
module.exports = LedScreen;
