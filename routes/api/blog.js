const express = require("express");
const createBlog = require("../../controllers/createBlog");
const updateBlog = require("../../controllers/updateBlog");
const deleteBlogById = require("../../controllers/deleteBlog");
const multer = require("multer");
const getAllBlogs = require("../../controllers/getAllBlogs");
const approveBlog = require("../../controllers/approveBlog");
const { getPendingBlogs } = require("../../controllers/getPendingBlogs");
const _ = express.Router();

// multer image processing 1
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");


  },
  filename: function (req, file, cb) {
    console.log("2", req.file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        `.${file.originalname.split(".")[1]}`
    );
  },
});

const upload = multer({ storage: storage });

// multer image processing2
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");


  },
  filename: function (req, file, cb) {
    console.log("2", req.file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        `.${file.originalname.split(".")[1]}`
    );
  },
});

const upload2 = multer({ storage: storage2 });

_.post("/createBlog", upload.single("image"), createBlog);
_.post("/updateBlog", upload2.single("image"), updateBlog);
_.post("/deleteBlog", deleteBlogById);
_.post("/approveBlog", approveBlog);
_.get("/getBlog", getAllBlogs);
_.get("/getPendingBlogs", getPendingBlogs);

module.exports = _;
