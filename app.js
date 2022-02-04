const express = require('express')
const AppRouterPosts = require('./api/routes/post')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// Database connection.
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB connected...')
})

// When mon aren't connected. and we get an error.
mongoose.connection.on('error', err => {
    console.error(`DB connection error : ${err.message}`)
})

//Midallwares.
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/', AppRouterPosts)

// Port to listen.
const port = process.env.PORT || '4000'
app.listen(port, () => {
    console.log(`Node app server listinig port ${port}`)
})