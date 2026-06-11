type VercelRequest = {
  method?: string;
  body?: { text?: string };
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
};

function readTelegramCredentials(env: Record<string, string | undefined>) {
  const botToken = (env.VITE_RSVP_TELEGRAM_BOT_TOKEN ?? env.TELEGRAM_BOT_TOKEN ?? '').trim();
  const chatId = (env.VITE_RSVP_TELEGRAM_CHAT_ID ?? env.TELEGRAM_CHAT_ID ?? '').trim();
  return { botToken, chatId };
}

async function sendTelegramMessage(botToken: string, chatId: string, text: string) {
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    let description = `Telegram API error (${res.status})`;
    try {
      const data = (await res.json()) as { description?: string };
      if (data.description) description = data.description;
    } catch {
      // ignore parse errors
    }
    return { ok: false as const, status: res.status, description };
  }

  return { ok: true as const };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const text = typeof req.body?.text === 'string' ? req.body.text.trim() : '';
  if (!text) {
    res.status(400).json({ ok: false, error: 'Message text is required' });
    return;
  }

  const { botToken, chatId } = readTelegramCredentials(process.env);
  if (!botToken || !chatId) {
    res.status(503).json({ ok: false, error: 'Telegram credentials are not configured' });
    return;
  }

  const result = await sendTelegramMessage(botToken, chatId, text);

  if (!result.ok) {
    res.status(result.status).json({ ok: false, error: result.description });
    return;
  }

  res.status(200).json({ ok: true });
}
