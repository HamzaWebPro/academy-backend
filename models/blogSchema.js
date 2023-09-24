const mongoose = require("mongoose");

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  content: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    // required: true,
  },
  author: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    // required: true,
  },
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a "User" model for authors
    // required: true,
  },
  authorEmail: {
    type: String,
    // required: true,
  },
});

// Create a Blog model using the schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
