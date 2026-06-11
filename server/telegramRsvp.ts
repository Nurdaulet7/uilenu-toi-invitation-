export type TelegramCredentials = {
  botToken: string;
  chatId: string;
};

export function readTelegramCredentials(env: Record<string, string | undefined>): TelegramCredentials {
  const botToken = (env.VITE_RSVP_TELEGRAM_BOT_TOKEN ?? env.TELEGRAM_BOT_TOKEN ?? '').trim();
  const chatId = (env.VITE_RSVP_TELEGRAM_CHAT_ID ?? env.TELEGRAM_CHAT_ID ?? '').trim();
  return { botToken, chatId };
}

export async function sendTelegramMessage(
  credentials: TelegramCredentials,
  text: string,
): Promise<{ ok: true } | { ok: false; status: number; description: string }> {
  const { botToken, chatId } = credentials;

  if (!botToken || !chatId) {
    return { ok: false, status: 503, description: 'Telegram credentials are not configured' };
  }

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
    return { ok: false, status: res.status, description };
  }

  return { ok: true };
}

export async function readJsonBody<T>(req: { on: (event: string, listener: (...args: unknown[]) => void) => void }): Promise<T> {
  const chunks: Buffer[] = [];

  await new Promise<void>((resolve, reject) => {
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk as Buffer)));
    req.on('end', () => resolve());
    req.on('error', reject);
  });

  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) throw new Error('Empty request body');
  return JSON.parse(raw) as T;
}
