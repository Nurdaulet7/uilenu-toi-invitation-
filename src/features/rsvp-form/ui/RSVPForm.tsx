import { FormEvent, useCallback, useState } from 'react';

import { rsvpContent } from '@shared/config/rsvpContent';
import { getRsvpTelegramCredentials } from '@shared/config/rsvpEnv';
import { Button } from '@shared/ui/Button';

import styles from './RSVPForm.module.scss';

type Attendance = 'coming' | 'not-coming';

type FormState = {
  name: string;
  guests: number;
  attendance: Attendance;
};

export function RSVPForm() {
  const [form, setForm] = useState<FormState>({ name: '', guests: 1, attendance: 'coming' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const changeGuests = useCallback((delta: number) => {
    setForm((f) => ({
      ...f,
      guests: Math.max(1, Math.min(10, f.guests + delta)),
    }));
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const { botToken, chatId } = getRsvpTelegramCredentials();
    if (!botToken || !chatId) {
      setStatus('error');
      return;
    }

    const attendanceText =
      form.attendance === 'coming'
        ? rsvpContent.attendanceComing
        : rsvpContent.attendanceNotComing;

    const text =
      `📩 RSVP\n\n` +
      `👤 ${form.name.trim()}\n` +
      `👥 Адам саны: ${form.guests}\n` +
      `✅ ${attendanceText}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!res.ok) throw new Error('Telegram error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const { botToken: hasToken, chatId: hasChat } = getRsvpTelegramCredentials();
  const telegramReady = Boolean(hasToken && hasChat);

  if (status === 'success') {
    return <p className={styles.success}>{rsvpContent.success}</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldBlock}>
        <input
          id="rsvp-name"
          required
          autoComplete="name"
          aria-label={rsvpContent.namePlaceholder}
          className={styles.input}
          name="name"
          placeholder={rsvpContent.namePlaceholder}
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
      </div>

      <div className={styles.fieldBlock}>
        <p className={styles.fieldHeading}>{rsvpContent.guestsHeading}</p>
        <div className={styles.counter}>
          <button
            aria-label="-1 адам"
            className={styles.counterBtn}
            disabled={form.guests <= 1}
            type="button"
            onClick={() => changeGuests(-1)}
          >
            −
          </button>
          <span className={styles.counterValue}>{form.guests}</span>
          <button
            aria-label="+1 адам"
            className={styles.counterBtn}
            disabled={form.guests >= 10}
            type="button"
            onClick={() => changeGuests(1)}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.fieldBlock}>
        <div className={styles.radios} role="radiogroup" aria-label="Қатысу">
          {(['coming', 'not-coming'] as const).map((val) => (
            <label key={val} className={styles.radioLabel}>
              <input
                checked={form.attendance === val}
                className={styles.radioInput}
                name="attendance"
                type="radio"
                value={val}
                onChange={() => setForm((f) => ({ ...f, attendance: val }))}
              />
              <span className={styles.radioCustom} aria-hidden />
              <span className={styles.radioText}>
                {val === 'coming' ? rsvpContent.attendanceComing : rsvpContent.attendanceNotComing}
              </span>
            </label>
          ))}
        </div>
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg} role="alert">
          {telegramReady ? rsvpContent.errorGeneric : rsvpContent.errorNotConfigured}
        </p>
      )}

      <Button
        className={styles.submit}
        disabled={status === 'loading'}
        type="submit"
        variant="primary"
      >
        {status === 'loading' ? rsvpContent.submitting : rsvpContent.submit}
      </Button>
    </form>
  );
}
