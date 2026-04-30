/** Telegram бот кілттері `.env`-те: `VITE_RSVP_TELEGRAM_BOT_TOKEN`, `VITE_RSVP_TELEGRAM_CHAT_ID` */

export function getRsvpTelegramCredentials(): { botToken: string; chatId: string } {
  const botToken =
    typeof import.meta.env.VITE_RSVP_TELEGRAM_BOT_TOKEN === 'string'
      ? import.meta.env.VITE_RSVP_TELEGRAM_BOT_TOKEN
      : '';
  const chatId =
    typeof import.meta.env.VITE_RSVP_TELEGRAM_CHAT_ID === 'string'
      ? import.meta.env.VITE_RSVP_TELEGRAM_CHAT_ID
      : '';
  return { botToken: botToken.trim(), chatId: chatId.trim() };
}
