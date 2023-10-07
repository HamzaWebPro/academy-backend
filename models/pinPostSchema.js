const mongoose = require("mongoose");

// Define the pinPost schema
const pinPostSchema = new mongoose.Schema({
  title: {
    type: String,
   
  },
  content: {
    type: String,

  },
  image: {
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
  authorEmail: {
    type: String,
  
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// Create a PinPost model using the schema
const PinPost = mongoose.model("PinPost", pinPostSchema);

module.exports = PinPost;