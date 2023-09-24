const Blog = require("../models/blogSchema");

async function getAllBlogs(req,res) {
  const blogs = await Blog.find({});

  return res.json({ blogs });
}

module.exports = getAllBlogs;
