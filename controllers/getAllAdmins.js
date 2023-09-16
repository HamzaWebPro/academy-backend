const User = require("../models/regSchema")

async function getAllAdmins(req, res) {
  try {
    // Use the User model to fetch all users from the database
    const users = await User.find({}); // Excluding the password field

    // Send the list of users as a JSON response
    return res.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching users" });
  }
}

module.exports = getAllAdmins;
