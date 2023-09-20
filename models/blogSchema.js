const mongoose = require("mongoose");

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  content: {
    type: String,
  
  },
  imageUrl: {
    type: String,
   
  },
  category: {
    type: String,
  
  },
  author: {
    type: String,

  },
  status: {
    type: String,

  },
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a "User" model for authors
 
  },
  authorEmail: {
    type: String,
 
  },
});

// Create a Blog model using the schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;