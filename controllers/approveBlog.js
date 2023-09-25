const Blog = require("../models/blogSchema");

async function approveBlog(req, res) {
  const { _id } = req.body;

  try {
    // Update the user's role using findOneAndUpdate
    const approveBlog = await Blog.findOneAndUpdate(
      { _id },
      { status :"approved" },
      { new: true } // To return the updated user
    );

    if (!approveBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.json({ message: "Blog approved successfully", blog: approveBlog });
  } catch (error) {
    console.error("Error approve blog:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while approve blog" });
  }
}

// Export the function for use in your API router
module.exports = approveBlog;
