const express = require('express')
const _ = express.Router()
const authRoutes = require("./auth.js")
const blogRoutes = require("./blog.js")

_.use("/auth",authRoutes)
_.use("/blog",blogRoutes)

module.exports = _ ;