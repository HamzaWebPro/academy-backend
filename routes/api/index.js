const express = require('express')
const _ = express.Router()
const authRoutes = require("./auth.js")
const blogRoutes = require("./blog.js")
const categoryRouts = require("./category.js")

_.use("/auth",authRoutes)
_.use("/blog",blogRoutes)
_.use("/category",categoryRouts)

module.exports = _ ;