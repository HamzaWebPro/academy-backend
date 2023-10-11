const express = require('express')
const _ = express.Router()
const authRoutes = require("./auth.js")
const blogRoutes = require("./blog.js")
const categoryRouts = require("./category.js")
const layoutRoutes = require("./layouts.js")

_.use("/auth",authRoutes)
_.use("/blog",blogRoutes)
_.use("/category",categoryRouts)
_.use("/layouts",layoutRoutes)

module.exports = _ ;