const PinPost = require("../models/pinPostSchema"); // Import your PinPost model

// Controller function to update a pin post by ID
let updatePinPost = async (req, res) => {
  try {
    const {
      replace,
      title,
      content,
      image,
      category,
      status,
      author,
      authorEmail,
    } = req.body; // Get the ID and other update data from the request body

    // Find the pin post by ID and update it
    const updatedPinPost = await PinPost.findOneAndUpdate(
      {
        replace 
      },
      {
        title,
        content,
        image,
        category,
        status,
        author,
        authorEmail,
      },
      { new: true }
    );

    if (!updatedPinPost) {
      return res.status(404).json({ message: "Pin post not found" });
    }

    // Send the updated pin post as a response
    res.status(200).json(updatedPinPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updatePinPost;
