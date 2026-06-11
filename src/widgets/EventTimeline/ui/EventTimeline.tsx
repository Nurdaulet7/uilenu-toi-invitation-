import { motion } from 'framer-motion';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './EventTimeline.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: 'easeOut' as const } },
};

const slideIn = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease: 'easeOut' as const } },
};

export function EventTimeline() {
  const { timeline } = invitation;

  return (
    <section className={styles.section}>
      <Container>
        <motion.div
          className={styles.inner}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 className={styles.title} variants={fadeUp}>
            {timeline.title}
          </motion.h2>

          <ol className={styles.list}>
            {timeline.events.map((ev) => (
              <motion.li key={ev.time} className={styles.item} variants={slideIn}>
                <span className={styles.label}>{ev.label}</span>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.time}>{ev.time}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  );
}
