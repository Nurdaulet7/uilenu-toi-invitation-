import { RSVPForm } from '@features/rsvp-form';
import { rsvpContent } from '@shared/config/rsvpContent';
import { Container } from '@shared/ui/Container';

import styles from './RSVPSection.module.scss';

export function RSVPSection() {
  return (
    <section className={styles.section} id="rsvp">
      <Container className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.kicker}>{rsvpContent.kicker}</h2>
          <p className={styles.intro}>{rsvpContent.nameIntro}</p>
        </header>
        <div className={styles.formWrap}>
          <RSVPForm />
        </div>
      </Container>
    </section>
  );
}
