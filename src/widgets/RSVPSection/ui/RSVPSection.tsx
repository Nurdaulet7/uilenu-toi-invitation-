import { motion } from 'framer-motion';

import { RSVPForm } from '@features/rsvp-form';
import { rsvpContent } from '@shared/config/rsvpContent';
import { Container } from '@shared/ui/Container';

import styles from './RSVPSection.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const fadeUpTransition = { duration: 0.52, ease: 'easeOut' } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: fadeUpTransition },
};

export function RSVPSection() {
  return (
    <section className={styles.section} id="rsvp">
      <Container>
        <motion.div
          className={styles.inner}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <header className={styles.head}>
            <motion.h2 className={styles.kicker} variants={fadeUp} id="rsvp-heading">
              {rsvpContent.kicker}
            </motion.h2>
            <motion.p className={styles.intro} variants={fadeUp}>
              {rsvpContent.nameIntro}
            </motion.p>
          </header>
          <motion.div className={styles.formWrap} variants={fadeUp}>
            <RSVPForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
