import { motion } from 'framer-motion';

import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './InvitationIntro.module.scss';

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const introItemTransition = { duration: 0.55, ease: 'easeOut' } as const;

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: introItemTransition },
};

export function InvitationIntro() {
  return (
    <section className={styles.section} id="intro">
      <Container>
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2 variants={textItem}>{invitation.intro.title}</motion.h2>
          <div className={styles.text}>
            {invitation.intro.paragraphs.map((paragraph) => (
              <motion.p key={paragraph} variants={textItem}>
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
