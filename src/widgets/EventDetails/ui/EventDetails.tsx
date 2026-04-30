import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './EventDetails.module.scss';

export function EventDetails() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        {invitation.details.map((item) => (
          <article className={styles.item} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </Container>
    </section>
  );
}
