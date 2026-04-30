import { ExternalLink } from 'lucide-react';

import { Button } from '@shared/ui/Button';
import { invitation } from '@shared/config/invitation';

import styles from './VenueSection.module.scss';

export function VenueSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>Location</p>
        <h2>{invitation.venue.name}</h2>
        <p>{invitation.venue.address}</p>
        <a href={invitation.venue.mapUrl} target="_blank" rel="noreferrer">
          <Button type="button" variant="ghost">
            <ExternalLink size={18} aria-hidden="true" />
            Открыть карту
          </Button>
        </a>
      </div>
    </section>
  );
}
