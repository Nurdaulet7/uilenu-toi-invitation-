import styles from './FeatureImageSection.module.scss';

const IMAGE_SRC = '/images/letter.png';

export function FeatureImageSection() {
  return (
    <section className={styles.section} aria-label="Фото">
      <div className={styles.dividerTop} aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapeFill} />
        </svg>
      </div>

      <div className={styles.imageWrap}>
        <img className={styles.image} src={IMAGE_SRC} alt="" loading="lazy" decoding="async" />
      </div>

      <div className={styles.dividerBottom} aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapeFill} />
        </svg>
      </div>
    </section>
  );
}
