import { readTelegramCredentials, sendTelegramMessage } from '../server/telegramRsvp';

type VercelRequest = {
  method?: string;
  body?: { text?: string };
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (data: unknown) => void;
};

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

  const result = await sendTelegramMessage(readTelegramCredentials(process.env), text);

  if (!result.ok) {
    res.status(result.status).json({ ok: false, error: result.description });
    return;
  }

  res.status(200).json({ ok: true });
}
