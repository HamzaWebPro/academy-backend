const PinPost = require("../models/pinPostSchema");

async function getAllPinPosts(req,res) {
  const PinPosts = await PinPost.find({});

  return res.json({ PinPosts });
}

module.exports = getAllPinPosts;
