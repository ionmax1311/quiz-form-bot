import { Telegraf } from 'telegraf';
import { config } from './config/config.js';
import { setupStartHandler } from './handlers/start.js';

const bot = new Telegraf(config.telegram.token);

setupStartHandler(bot);

bot.catch((err, ctx) => {
  console.error('Bot error:', err.message);
  ctx.reply('Что-то пошло не так. Попробуйте /start').catch(() => {});
});

process.once('SIGINT',  () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('🤖 Запуск бота...');
bot.launch().then(() => {
  console.log(`✅ Бот запущен: @${bot.botInfo.username}`);
  console.log(`📱 Mini App:    ${config.miniapp.url}`);
});
