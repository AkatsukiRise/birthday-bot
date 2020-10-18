const {Telegram} = require('telegraf');

const bot = new Telegram(process.env.TELEGRAM_TOKEN);
module.export = bot;