

const Blog = require('../models/blogSchema')
// Controller function to update a blog post by ID
let updateBlog = async (req, res) => {
  try {
    const { _id, ...formData } = req.body; // Get the ID and other update data from the request body

    // Find the blog by ID and update it
    const updatedBlog = await Blog.findByIdAndUpdate(_id, formData, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Send the updated blog as a response
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = updateBlog