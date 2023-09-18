const bcrypt = require("bcrypt");
const emailValidation = require("../helpers/emailValidation");
const User = require("../models/regSchema");

async function registration(req, res) {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res.json({ error: "Please enter your full name" });
  }
  if (!email) {
    return res.json({ error: "Please enter your email" });
  }
  if (!emailValidation(email)) {
    return res.json({ error: "Please enter a valid email address" });
  }
  if (!password) {
    return res.json({ error: "Please enter your password" });
  }

  let duplicateEmail = await User.find({ email: email });
  if (duplicateEmail.length > 0) {
    return res.json({ error: "email already exists" });
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    const user = new User({
      fullName,
      email,
      password: hash,
    });
    await user.save();

   
    return res.json({
      fullName: user.fullName,
      email: user.email,
      error: "Registration successfull!!",
    });
  });
}

module.exports = registration;
