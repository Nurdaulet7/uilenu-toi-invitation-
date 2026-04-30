import { invitation } from '@shared/config/invitation';
import { Container } from '@shared/ui/Container';

import styles from './ClosingInvite.module.scss';

export function ClosingInvite() {
  const { lines } = invitation.closing;

  if (lines.length === 0) return null;

  const [first, ...rest] = lines;

  return (
    <section className={styles.section} id="closing" aria-label="Қоштасу хаты">
      <Container>
        <div className={styles.inner}>
          <p className={styles.line}>{first}</p>
          {rest.map((line) => (
            <p key={line} className={styles.lineAccent}>
              {line}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
