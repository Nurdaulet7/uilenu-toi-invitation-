import { RSVPForm } from '@features/rsvp-form';
import { Container } from '@shared/ui/Container';

import styles from './RSVPSection.module.scss';

export function RSVPSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div>
          <p className={styles.kicker}>RSVP</p>
          <h2>Подтвердите присутствие</h2>
        </div>
        <RSVPForm />
      </Container>
    </section>
  );
}
