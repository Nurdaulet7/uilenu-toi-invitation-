import { CalendarDays, MapPin } from 'lucide-react';

import { invitation } from '@shared/config/invitation';
import FlowerIcon from '@shared/assets/icons/flower.svg?react';

import styles from './HeroSection.module.scss';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <FlowerIcon className={styles.icon} aria-hidden="true" />
        <p className={styles.eyebrow}>Wedding invitation</p>
        <h1>{invitation.couple}</h1>
        <div className={styles.meta}>
          <span>
            <CalendarDays size={18} aria-hidden="true" />
            {invitation.date}
          </span>
          <span>
            <MapPin size={18} aria-hidden="true" />
            {invitation.venue.name}
          </span>
        </div>
      </div>
    </section>
  );
}
