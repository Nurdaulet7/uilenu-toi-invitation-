import { motion } from 'framer-motion';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './ClosingInvite.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUpTransition = { duration: 0.52, ease: 'easeOut' } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: fadeUpTransition },
};

export function ClosingInvite() {
  const { lines } = invitation.closing;

  if (lines.length === 0) return null;

  const [first, ...rest] = lines;

  return (
    <section className={styles.section} id="closing" aria-label="Қоштасу хаты">
      <Container>
        <motion.div
          className={styles.inner}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p className={styles.line} variants={fadeUp}>
            {first}
          </motion.p>
          {rest.map((line) => (
            <motion.p key={line} className={styles.lineAccent} variants={fadeUp}>
              {line}
            </motion.p>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
