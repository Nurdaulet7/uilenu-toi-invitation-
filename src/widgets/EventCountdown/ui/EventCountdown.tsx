import { useEffect, useMemo, useState } from 'react';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './EventCountdown.module.scss';

function splitRemaining(msRemaining: number) {
  if (msRemaining <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true as const };
  const totalSec = Math.floor(msRemaining / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, expired: false as const };
}

const LABELS = ['күн', 'сағат', 'минут', 'секунд'] as const;

export function EventCountdown() {
  const {
    countdown: { title, backgroundImage, startsAtISO, expiredMessage },
  } = invitation;
  const targetMs = useMemo(() => Date.parse(startsAtISO), [startsAtISO]);

  const [tick, setTick] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = Number.isFinite(targetMs)
    ? splitRemaining(targetMs - tick)
    : { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true as const };

  const expiredText =
    expiredMessage ?? 'Мереке басталды немесе мекендеме уақытын тексеріңіз.';

  const bgStyle =
    backgroundImage?.trim() !== ''
      ? ({ backgroundImage: `url(${backgroundImage})` } as const)
      : undefined;

  return (
    <section className={styles.section} id="countdown" aria-labelledby="countdown-heading">
      {bgStyle ? <div aria-hidden="true" className={styles.bg} style={bgStyle} /> : null}
      <div aria-hidden="true" className={styles.scrim} />
      <Container className={styles.shell}>
        <div className={styles.inner}>
          <h2 className={styles.title} id="countdown-heading">
            {title}
          </h2>

          {!Number.isFinite(targetMs) ? (
            <p className={styles.expired} role="status">
              {expiredText}
            </p>
          ) : parts.expired ? (
            <p className={styles.expired} role="status">
              {expiredText}
            </p>
          ) : (
            <div className={styles.row} role="timer" aria-live="polite" aria-atomic="true">
              <div className={styles.unit}>
                <span className={styles.value}>{parts.days}</span>
                <span className={styles.label}>{LABELS[0]}</span>
              </div>
              <span className={styles.sep} aria-hidden="true">
                :
              </span>
              <div className={styles.unit}>
                <span className={styles.value}>{String(parts.hours).padStart(2, '0')}</span>
                <span className={styles.label}>{LABELS[1]}</span>
              </div>
              <span className={styles.sep} aria-hidden="true">
                :
              </span>
              <div className={styles.unit}>
                <span className={styles.value}>{String(parts.minutes).padStart(2, '0')}</span>
                <span className={styles.label}>{LABELS[2]}</span>
              </div>
              <span className={styles.sep} aria-hidden="true">
                :
              </span>
              <div className={styles.unit}>
                <span className={styles.value}>{String(parts.seconds).padStart(2, '0')}</span>
                <span className={styles.label}>{LABELS[3]}</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
