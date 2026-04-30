import { useState } from 'react';

import ArrowDown from '@shared/assets/icons/arrow-down.svg?react';
import { Container } from '@shared/ui/Container';
import { ShapeDivider } from '@shared/ui/ShapeDivider';

import styles from './HeroSection.module.scss';

export function HeroSection() {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.musicWrap}>
        <svg className={styles.musicCircleText} viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="music-circle-path" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
          </defs>
          <text>
            <textPath href="#music-circle-path" startOffset="0%">
              Музыканы қосу үшін басыңыз · Музыканы қосу үшін басыңыз ·
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
        <h1 className={styles.title}>Аяулым & Арман</h1>
        <p className={styles.subtitle}>Үйлену тойы</p>
      </Container>

      <a className={styles.scrollButton} href="#intro" aria-label="Келесі бөлімге өту">
        <ArrowDown className={styles.scrollArrow} aria-hidden="true" />
      </a>

      <ShapeDivider className={styles.shapeDivider} />
    </section>
  );
}
