const express = require('express');
const createBlog = require('../../controllers/createBlog');

const _ = express.Router()


_.post("/createBlog",createBlog)


// _.post("/becomeamarchant",becomeMarchant)

module.exports = _ ;