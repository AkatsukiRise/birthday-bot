require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const friendRoutes = require('./routes/friend')

const app = express()

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
})
.then(() => console.log("MongoDB connected"))
.catch(error => console.log(error))

app.use(require('morgan')('dev'))
// app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api/friend', friendRoutes)

module.exports = app