import { invitation } from '@shared/config/invitation';

import styles from './InvitationIntro.module.scss';

export function InvitationIntro() {
  return (
    <section className={styles.section}>
      <p>{invitation.intro}</p>
    </section>
  );
}
