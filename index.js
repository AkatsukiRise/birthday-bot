require('dotenv').config()
const mongoose = require('mongoose')
const bot = require('./telegram')

const friendController = require("./controllers/friend")

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
})
.then(() => console.log("MongoDB connected"))
.catch(error => console.log(error))



bot.on('message', friendController.getAll)