const User = require("../models/regSchema");

async function deleteAdminByEmail(req, res) {
  const { adminId } = req.body; // Assuming you pass the email in the request body

  try {
    // Find the user by email
    const user = await User.findByIdAndDelete(adminId);

    return res.json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the admin" });
  }
}

module.exports = deleteAdminByEmail;
