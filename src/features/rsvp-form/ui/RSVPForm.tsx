import { FormEvent, useState } from 'react';

import { rsvpContent } from '@shared/config/rsvpContent';
import { getRsvpTelegramCredentials } from '@shared/config/rsvpEnv';
import { Button } from '@shared/ui/Button';

import styles from './RSVPForm.module.scss';

type Attendance = 'coming' | 'coming-with-spouse' | 'not-coming';

type FormState = {
  name: string;
  attendance: Attendance;
};

const attendanceOptions: Attendance[] = ['coming', 'coming-with-spouse', 'not-coming'];

function getAttendanceLabel(attendance: Attendance): string {
  if (attendance === 'coming') return rsvpContent.attendanceComing;
  if (attendance === 'coming-with-spouse') return rsvpContent.attendanceComingWithSpouse;
  return rsvpContent.attendanceNotComing;
}

export function RSVPForm() {
  const [form, setForm] = useState<FormState>({ name: '', attendance: 'coming' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const { botToken, chatId } = getRsvpTelegramCredentials();
    if (!botToken || !chatId) {
      setStatus('error');
      return;
    }

    const attendanceTelegramLine =
      form.attendance === 'not-coming'
        ? `❌ ${rsvpContent.attendanceNotComing}`
        : `✅ ${getAttendanceLabel(form.attendance)}`;

    const text =
      `${rsvpContent.telegramMessageHeading}\n\n` +
      `👤 ${form.name.trim()}\n` +
      `${attendanceTelegramLine}`;

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        console.error('RSVP error:', data?.error ?? res.statusText);
        throw new Error('RSVP error');
      }

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
        <div className={styles.radios} role="radiogroup" aria-label="Қатысу">
          {attendanceOptions.map((val) => (
            <label key={val} className={styles.radioLabel}>
              <input
                checked={form.attendance === val}
                className={styles.radioInput}
                name="attendance"
                type="radio"
                value={val}
                onChange={() => setForm((f) => ({ ...f, attendance: val }))}
              />
              <span
                className={val === 'not-coming' ? styles.radioCustomX : styles.radioCustom}
                aria-hidden
              />
              <span className={styles.radioText}>{getAttendanceLabel(val)}</span>
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
