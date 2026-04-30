import { EventDetails } from '@widgets/EventDetails';
import { HeroSection } from '@widgets/HeroSection';
import { InvitationIntro } from '@widgets/InvitationIntro';
import { RSVPSection } from '@widgets/RSVPSection';
import { VenueSection } from '@widgets/VenueSection';

import styles from './InvitationPage.module.scss';

export function InvitationPage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <InvitationIntro />
      <EventDetails />
      <VenueSection />
      <RSVPSection />
    </main>
  );
}
