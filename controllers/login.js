const emailValidation = require("../helpers/emailValidation");
const User = require("../models/regSchema");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { email, password } = req.body;

  if (!email) {
    return res.json({ error: "Please enter your email" });
  }
  if (!emailValidation(email)) {
    return res.json({ error: "Please enter a valid email address" });
  }
  if (!password) {
    return res.json({ error: "Please enter your password" });
  }

  let existingEmail = await User.find({ email });

  if (existingEmail.length == []) {
    return res.json({ error: "Email not exists" });
  }
  bcrypt.compare(password, existingEmail[0].password).then(async function (result) {
    if (!result) {
        return res.json({ error: "Credential error" });
      }
    return res.json({
      error: "Login Successfull",
    });
  });
}

module.exports = login;