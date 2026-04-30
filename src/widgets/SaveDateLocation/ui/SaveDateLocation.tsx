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
          <motion.h2 variants={textItem}>{invitation.saveDate.date}</motion.h2>
          <motion.p className={styles.time} variants={textItem}>
            {invitation.venue.time}
          </motion.p>
          <motion.p className={styles.description} variants={textItem}>
            {invitation.saveDate.text}
          </motion.p>
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
