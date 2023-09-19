const express = require("express");
const createBlog = require("../../controllers/createBlog");
const updateBlog = require("../../controllers/updateBlog");
const  deleteBlogById  = require("../../controllers/deleteBlog");

const _ = express.Router();

_.post("/createBlog", createBlog);
_.post("/updateBlog", updateBlog);
_.post("/deleteBlog", deleteBlogById);




module.exports = _;
