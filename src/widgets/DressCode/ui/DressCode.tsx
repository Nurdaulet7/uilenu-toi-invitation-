import type { CSSProperties } from 'react';

import { motion } from 'framer-motion';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './DressCode.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUpTransition = { duration: 0.52, ease: 'easeOut' } as const;
const swatchTransition = { duration: 0.48, ease: 'easeOut' } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: fadeUpTransition },
};

const swatchItem = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: swatchTransition,
  },
};

export function DressCode() {
  const { dressCode } = invitation;

  return (
    <section className={styles.section} id="dress-code">
      <Container>
        <motion.div
          className={styles.inner}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.h2 className={styles.title} variants={fadeUp}>
            {dressCode.title}
          </motion.h2>

          <div className={styles.intro}>
            {dressCode.paragraphs.map((p) => (
              <motion.p key={p} variants={fadeUp}>
                {p}
              </motion.p>
            ))}
          </div>

          <article className={styles.group} aria-labelledby="dress-ladies">
            <motion.h3 className={styles.groupTitle} id="dress-ladies" variants={fadeUp}>
              {dressCode.ladies.label}
            </motion.h3>
            <ul className={styles.swatches}>
              {dressCode.ladies.colors.map((hex) => (
                <motion.li key={hex} className={styles.cell} variants={swatchItem}>
                  <span
                    className={styles.swatch}
                    style={{ '--dress-swatch': hex } as CSSProperties}
                    aria-hidden="true"
                  />
                </motion.li>
              ))}
            </ul>
          </article>

          <article className={styles.group} aria-labelledby="dress-gents">
            <motion.h3 className={styles.groupTitle} id="dress-gents" variants={fadeUp}>
              {dressCode.men.label}
            </motion.h3>
            <ul className={styles.swatches}>
              {dressCode.men.colors.map((hex) => (
                <motion.li key={hex} className={styles.cell} variants={swatchItem}>
                  <span
                    className={styles.swatch}
                    style={{ '--dress-swatch': hex } as CSSProperties}
                    aria-hidden="true"
                  />
                </motion.li>
              ))}
            </ul>
          </article>
        </motion.div>
      </Container>
    </section>
  );
}
