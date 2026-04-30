import { motion } from 'framer-motion';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './HostsSection.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const fadeUpTransition = { duration: 0.52, ease: 'easeOut' } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: fadeUpTransition },
};

export function HostsSection() {
  const { hosts } = invitation;

  return (
    <section className={styles.section} id="hosts">
      <Container>
        <motion.div
          className={styles.inner}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.h2 className={styles.title} variants={fadeUp}>
            {hosts.title}
          </motion.h2>
          <motion.p className={styles.names} variants={fadeUp}>
            {hosts.names}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
