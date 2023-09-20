require("dotenv").config();
const express = require('express')
const dbConnection = require('./config/dbConnection')
const routes = require("./routes")
var cors = require('cors')
const app = express()
const path = require('path')



app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(cors())
dbConnection()
app.use(routes)



app.listen(8000)