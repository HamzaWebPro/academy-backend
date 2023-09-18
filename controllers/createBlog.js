const Blog = require("../models/blogSchema");
const User = require("../models/regSchema")

// Controller function to create a new blog post with authentication
const createBlog = async (req, res) => {
  const { title, content, imageUrl, category, author, authorID, authorEmail } =
    req.body;

  // Check for empty fields
  if (!title || !content || !imageUrl || !category || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a new blog post

  const newBlog = await Blog({
    title,
    content,
    imageUrl,
    category,
    author,
    authorID,
    authorEmail,
  });

  await newBlog.save();
  await User.findOneAndUpdate(
    { _id: newBlog.authorID },
    { $push: { blog: newBlog._id } },
    { new: true }
  );

  res.json({ message: "Blog Created Successfully" });
};

module.exports = createBlog;