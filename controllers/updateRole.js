const User = require("../models/regSchema");

async function updateAdminRole(req, res) {
  const { userId, newRole } = req.body;

  try {
    // Update the user's role using findOneAndUpdate
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { role: newRole },
      { new: true } // To return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ message: "User role updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user role:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the user role" });
  }
}

// Export the function for use in your API router
module.exports = updateAdminRole;
