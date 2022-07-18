const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const app = express()

require("dotenv").config()
app.use(bodyparser.json())
app.use(morgan('tiny'))

require("../routes")(app)
module.exports = app