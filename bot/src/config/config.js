import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../.env') });

export const config = {
  telegram: { token: process.env.BOT_TOKEN },
  miniapp:  { url: process.env.MINIAPP_URL },
};

if (!config.telegram.token) throw new Error('❌ BOT_TOKEN не задан в .env');
if (!config.miniapp.url)    console.warn('⚠️  MINIAPP_URL не задан в .env');
