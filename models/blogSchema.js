const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20, // Max 20 characters
  },
  content: {
    type: String,
    required: true,
    maxLength: 300, // Max 300 characters
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  status: {
    type: String,
  },
  authorID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  authorEmail: {
    type: String, // You can change this to reference a User model if you have one
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
module.exports = mongoose.model("Blog", blogSchema);
