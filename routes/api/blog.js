const express = require("express");
const createBlog = require("../../controllers/createBlog");
const updateBlog = require("../../controllers/updateBlog");
const  deleteBlogById  = require("../../controllers/deleteBlog");
const multer = require("multer");
const _ = express.Router();

// multer image processing
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
    }
  })
  
  const upload = multer({ storage: storage })



_.post("/createBlog",upload.single("image"), createBlog);
_.post("/updateBlog", updateBlog);
_.post("/deleteBlog", deleteBlogById);




module.exports = _;
