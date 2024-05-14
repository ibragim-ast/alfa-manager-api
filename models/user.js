const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["manager", "engineer", "director", "admin"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
