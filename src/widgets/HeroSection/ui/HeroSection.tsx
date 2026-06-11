import { useEffect, useRef, useState } from 'react';

import ArrowDown from '@shared/assets/icons/arrow-down.svg?react';
import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';
import styles from './HeroSection.module.scss';

const BACKGROUND_TRACK_SRC = '/audio/miras-zholdama.mp3';

export function HeroSection() {
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.65;

    if (isMusicEnabled) {
      const p = el.play();
      if (p !== undefined) {
        void p.catch(() => {
          const playOnInteraction = () => {
            void el.play().catch(() => setIsMusicEnabled(false));
          };
          document.addEventListener('click', playOnInteraction, { once: true });
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('scroll', playOnInteraction, { once: true });
        });
      }
    } else {
      el.pause();
    }
  }, [isMusicEnabled]);

  return (
    <section className={styles.hero} id="hero">
      <audio aria-hidden ref={audioRef} loop preload="metadata" src={BACKGROUND_TRACK_SRC} />

      <div className={styles.musicWrap}>
        <svg className={styles.musicCircleText} viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="music-circle-path" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
          </defs>
          <text>
            <textPath href="#music-circle-path" startOffset="0%">
              Музыканы қосу үшін басыңыз · 
            </textPath>
          </text>
        </svg>
        <button
          className={styles.musicButton}
          type="button"
          aria-label={isMusicEnabled ? 'Музыканы өшіру' : 'Музыканы қосу'}
          aria-pressed={isMusicEnabled}
          onClick={() => setIsMusicEnabled((value) => !value)}
        >
          {isMusicEnabled ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 19h4V5H6v14Zm8-14v14h4V5h-4Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7Z" />
            </svg>
          )}
        </button>
      </div>

      <Container className={styles.content}>
        <p className={styles.initials} aria-hidden="true">
          <span className={`${styles.initialsStep} ${styles.stepFirst}`}>А</span>
          <span className={`${styles.initialsStep} ${styles.stepMid}`}>&</span>
          <span className={`${styles.initialsStep} ${styles.stepLast}`}>Г</span>
        </p>
        <h1 className={styles.title}>{invitation.couple}</h1>
      </Container>

      <a className={styles.scrollButton} href="#intro" aria-label="Келесі бөлімге өту">
        <ArrowDown className={styles.scrollArrow} aria-hidden="true" />
      </a>

      <div className={styles.dividerBottom} aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className={styles.shapeFill}
          />
        </svg>
      </div>
    </section>
  );
}
