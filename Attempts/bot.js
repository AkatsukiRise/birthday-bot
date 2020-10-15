require('dotenv').config();
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');

const startBlock = new Block((ctx) => {
  ctx.reply(
    `Привет, ${ctx.message.from.first_name}! Я буду оповещать тебя о днях рождения друзей.`
  );
  ctx.reply('Приступим к работе? /start');
});
const block = new Block('Ну наконец-то ты сюда попал');
block.setButtons(['Button1', 'Button2', 'Button3']);
// Инициализация бота
const bot = new Telegraf(process.env.BOT_TOKEN);
let start = true;
bot.start((ctx) => {
  if (start) {
    ctx.reply(
      `Привет, ${ctx.message.from.first_name}`,
      Markup.keyboard([
        ['One', 'Two'],
        ['Three', 'Four'],
      ]).extra()
    );
    start = true;
  } else {
    ctx.reply;
  }
});
bot.help((ctx) =>
  ctx.reply(
    started
      ? 'Пользуйся кнопками на панели внизу. Все основные операции лежат в меню.'
      : 'Начни работу со мной, написав мне /start'
  )
);
bot.on('text', (ctx) =>
  ctx.reply(
    'Какой-то ответ',
    Markup.keyboard([
      ['1', '2'],
      ['3', '4'],
    ]).extra()
  )
);

bot.launch();
