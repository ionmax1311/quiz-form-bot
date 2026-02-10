import { Markup } from 'telegraf';
import { config } from '../config/config.js';

export const keyboards = {
  main: () =>
    Markup.keyboard([
      [Markup.button.webApp('📊 Открыть Forex Quiz', config.miniapp.url)],
      ['ℹ️ О боте'],
    ]).resize(),
};
