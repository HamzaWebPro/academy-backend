const Blog = require("../models/blogSchema"); // Assuming you have a Blog model

// Controller to get pending blogs
const getPendingBlogs = async (req, res) => {
  try {
    const pendingBlogs = await Blog.find({ status: "pending" });
    res.json({ blogs: pendingBlogs });
  } catch (error) {
    console.error("Error fetching pending blogs:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getPendingBlogs,
};
