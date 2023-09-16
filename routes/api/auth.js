const express = require('express');
const registration = require('../../controllers/reg');
const login = require('../../controllers/login');
const getAllAdmins = require('../../controllers/getAllAdmins');
const deleteAdminByEmail = require('../../controllers/deleteAdmin');
const updateAdminRole = require('../../controllers/updateRole');
const _ = express.Router()


_.post("/registration",registration)
_.post("/login",login)
_.get("/allAdmins",getAllAdmins)
_.post("/deleteAdmin",deleteAdminByEmail)
_.post("/updateRole",updateAdminRole)

// _.post("/becomeamarchant",becomeMarchant)

module.exports = _ ;