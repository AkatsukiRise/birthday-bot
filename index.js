const app = require('./app')
const port = process.env.port || 5000

app.listen(5000, () => {
    console.log(`Server has been started on ${port}`)
})
// const TelegramBot = require('node-telegram-bot-api')
// require('dotenv').config()

// const bot = new TelegramBot(process.env.BOT_TOKEN, {
//     polling: true
// })

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id
//     bot.sendMessage(chatId, 'Клавиатура', 
//     {
//         reply_markup: {
//             keyboard: [
//                 ['1', '2'],
//                 ['1'],
//                 ['4', '5', '6']
//             ]
//         }
//     })
// })