// Граф
class Block {
  #callback;
  #buttons;

  constructor(something) {
    if (typeof something == 'string') {
      this.#callback = (ctx) => ctx.reply(something);
    } else if (typeof something == 'function') {
      this.#callback = something;
    } else {
      console.log('Illegal Argument Exception!\nUse string or function par');
      throw err;
    }
  }

  getCallback() {
    return callback;
  }

  setButtons(buttons) {
    this.#buttons = buttons;
  }

  activateButton(text) {}

  drawButtons() {}
}

const elements = [];
const buttons = new Map();

// {
//   elements.push(
//     new Block('Пока я не храню ни одной даты, готов ли ты предоставить мне их сейчас?')
//   );
//   elements.push(new Block('Ничего страшного, я буду ждать, дай знать, если понадоблюсь!'));
//   elements.push(new Block('Давай внесем информацию'));
//   elements.push(new Block('Чем сейчас могу послужить?'));
//   elements.push(new Block('Предоставляю тебе список'));
//   elements.push(new Block('Будующие дни рождения до'));

//   buttons.push('Думаю, не сегодня', elements[0];
//   buttons.push('Я готов', elements[1];
// //   buttons.push('В меню', elements[2];
// //   buttons.push('Дополним базу', elements[1]);
// //   buttons.push('Покажи мне весь список', elements[3]));
// //   buttons.push('Покажи мне список ближайших', elements[4]));

//   elements[0].addButtons([buttons[0], buttons[1]]);
// //   elements[1].addButtons([buttons[2]]);
// //   elements[2].addButtons([buttons[2]]);
// //   elements[3].addButtons([buttons[3], buttons[4], buttons[5]]);
// //   elements[4].addButtons([buttons[2]]);
// //   elements[5].addButtons([buttons[2]]);
// }
