import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './InvitationIntro.module.scss';

export function InvitationIntro() {
  return (
    <section className={styles.section} id="intro">
      <Container>
        <p>{invitation.intro}</p>
      </Container>
    </section>
  );
}
