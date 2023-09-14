const mongoose = require("mongoose");
const { Schema } = mongoose;

const regSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "admin",
    enum: ["superAdmin", "admin"],
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    require: true,
    default: Date.now,
  },
  faceBookID: {
    type: String,
  },
  linkedinID: {
    type: String,
  },
});

module.exports = mongoose.model("User", regSchema);
