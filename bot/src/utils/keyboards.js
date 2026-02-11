import { Markup } from 'telegraf';
import { config } from '../config/config.js';

export const keyboards = {
  // Клавиатура для первого захода
  firstStart: () =>
    Markup.keyboard([
      ['🚀 Старт'],
    ]).resize().persistent(),

  // Основная клавиатура с квизом
  main: () =>
    Markup.keyboard([
      [Markup.button.webApp('📊 Открыть Forex Quiz', config.miniapp.url)],
      ['ℹ️ О боте'],
    ]).resize().persistent(),
};
