import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { invitation } from '@shared/config/invitation';
import { Button } from '@shared/ui/Button';

import styles from './SaveDateLocation.module.scss';

const panelTransition = { duration: 0.72, ease: 'easeOut' } as const;
const textItemTransition = { duration: 0.55, ease: 'easeOut' } as const;

const revealFromLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0, transition: panelTransition },
};

const revealFromRight = {
  hidden: { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0, transition: panelTransition },
};

const contentFromRight = {
  hidden: { opacity: 0, x: 42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...panelTransition,
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const contentFromLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...panelTransition,
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: textItemTransition },
};

export function SaveDateLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <motion.div
          className={`${styles.imagePanel} ${styles.imagePanelSaveDate}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={revealFromLeft}
        >
          <img src={invitation.saveDate.image} alt="" loading="lazy" />
        </motion.div>

        <motion.div
          className={styles.contentPanel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={contentFromRight}
        >
          <motion.p className={styles.saveDateKicker} variants={textItem}>
            {invitation.saveDate.title}
          </motion.p>
          <motion.span className={styles.ornament} variants={textItem} aria-hidden="true">
            <motion.svg
              className={styles.heart}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ scale: [1, 1.22, 1, 1.12, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 0.9,
                ease: 'easeInOut',
                times: [0, 0.14, 0.28, 0.42, 1],
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          </motion.span>
          <motion.h2 className={styles.dateDisplay} variants={textItem}>
            {invitation.saveDate.date}
          </motion.h2>
        </motion.div>
      </div>

      <div className={styles.row}>
        <motion.div
          className={styles.contentPanel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={contentFromLeft}
        >
          <motion.h2 variants={textItem} className={styles.venueTitle}>Мекен-жайымыз:</motion.h2>
          <motion.p className={styles.description} variants={textItem}>
            {invitation.venue.city},
            <br />
            {invitation.venue.name}
          </motion.p>
          <motion.a
            href={invitation.venue.mapUrl}
            target="_blank"
            rel="noreferrer"
            variants={textItem}
          >
            <Button type="button" variant="ghost" className={styles.mapButton}>
              <MapPin size={18} strokeWidth={2} aria-hidden="true" />
              2GIS
            </Button>
          </motion.a>
        </motion.div>

        <motion.div
          className={`${styles.imagePanel} ${styles.imagePanelVenue}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={revealFromRight}
        >
          <img src={invitation.venue.image} alt="" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}
