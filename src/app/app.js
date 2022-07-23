const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const app = express()

require("dotenv").config()
app.use(bodyparser.json())
app.use(cookieParser())
app.use(helmet())
app.use(morgan('tiny'))

require("../routes")(app)
module.exports = app