const Blog = require("../models/blogSchema"); // Replace with your Blog model import

// Controller to delete a blog by ID
const deleteBlogById = async (req, res) => {
  const { _id } = req.body;

  try {
    // Find the blog by ID and remove it
    await Blog.findByIdAndRemove(_id);

    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the blog" });
  }
};

module.exports = deleteBlogById;
