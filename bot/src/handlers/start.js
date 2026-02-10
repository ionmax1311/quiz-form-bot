import { keyboards } from '../utils/keyboards.js';

export function setupStartHandler(bot) {
  bot.start((ctx) => {
    ctx.reply(
      `👋 Привет, ${ctx.from.first_name}!\n\n` +
      `Нажми кнопку ниже, чтобы пройти квиз по форексу и инвестициям прямо здесь в Telegram 📊`,
      keyboards.main()
    );
  });

  bot.hears('ℹ️ О боте', (ctx) => {
    ctx.reply(
      `ℹ️ *Forex Quiz Mini App*\n\n` +
      `Квиз на знание форекса и инвестиций.\n\n` +
      `*Стек:* Node.js · Telegraf · Supabase · Telegram Mini App\n\n` +
      `Нажми *📊 Открыть Forex Quiz* чтобы начать!`,
      { parse_mode: 'Markdown', ...keyboards.main() }
    );
  });

  // Обработчик закрытия миниаппа — показываем кнопки снова
  bot.on('web_app_data', (ctx) => {
    let payload;
    try {
      payload = JSON.parse(ctx.webAppData.data);
    } catch {}

    ctx.reply(
      '✅ Спасибо, что прошли квиз!\n\nМожете пройти ещё раз 👇',
      keyboards.main()
    );
  });
}
