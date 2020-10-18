const mongoose = require('mongoose')
require('dotenv').config()
const friendController = require("./controllers/friend")

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
})
.then(() => console.log("MongoDB connected"))
.catch(error => console.log(error))


const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
})

bot.on('message', friendController.getAll)


// require('dotenv').config()
// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// const authRoutes = require('./routes/auth')
// const friendRoutes = require('./routes/friend')

// const app = express()

// mongoose.connect(process.env.mongoURI, {
//     useNewUrlParser: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(error => console.log(error))

// app.use(require('morgan')('dev'))
// // app.use(require('cors')())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// module.exports = app