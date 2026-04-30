import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './InvitationIntro.module.scss';

export function InvitationIntro() {
  return (
    <section className={styles.section} id="intro">
      <Container>
        <h2>{invitation.intro.title}</h2>
        <div className={styles.text}>
          {invitation.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
