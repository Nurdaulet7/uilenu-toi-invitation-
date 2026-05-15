import { HeroSection } from '@widgets/HeroSection';
import { HostsSection } from '@widgets/HostsSection';
import { InvitationFooter } from '@widgets/InvitationFooter';
import { InvitationIntro } from '@widgets/InvitationIntro';
import { ClosingInvite } from '@widgets/ClosingInvite';
import { DressCode } from '@widgets/DressCode';
import { EventCountdown } from '@widgets/EventCountdown';
import { EventTimeline } from '@widgets/EventTimeline';
import { GallerySlider } from '@widgets/GallerySlider';
import { RSVPSection } from '@widgets/RSVPSection';
import { SaveDateLocation } from '@widgets/SaveDateLocation';

import styles from './InvitationPage.module.scss';

export function InvitationPage() {
  return (
    <>
      <main className={styles.page}>
        <HeroSection />
        <InvitationIntro />
        <SaveDateLocation />
        <GallerySlider />
        <EventTimeline />
        <DressCode />
        <HostsSection />
        <RSVPSection />
        <EventCountdown />
        <ClosingInvite />
      </main>
      <InvitationFooter />
    </>
  );
}
