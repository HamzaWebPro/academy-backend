const express = require('express');
const { createNavdata, getAllNavdata, deleteNavdata } = require('../../controllers/Navbar');
const _ = express.Router()



// navbar routes
_.post("/addnavdata",createNavdata)
_.get("/getnav",getAllNavdata)
_.post("/deletenav",deleteNavdata)



module.exports = _ ;