const Blog = require("../models/blogSchema");

// Controller function to create a new blog post with authentication
const createBlog = async (req, res) => {
  const { title, content, imageUrl, category, author,authorID,authorEmail } = req.body;

  // Check for empty fields
  if (!title || !content || !imageUrl || !category || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a new blog post
  try {
    const newBlog = await Blog.create({
      title,
      content,
      imageUrl,
      category,
      author,
      authorID,
      authorEmail
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createBlog;
