import { HeroSection } from '@widgets/HeroSection';
import { InvitationIntro } from '@widgets/InvitationIntro';
import { RSVPSection } from '@widgets/RSVPSection';
import { SaveDateLocation } from '@widgets/SaveDateLocation';

import styles from './InvitationPage.module.scss';

export function InvitationPage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <InvitationIntro />
      <SaveDateLocation />
      <RSVPSection />
    </main>
  );
}
