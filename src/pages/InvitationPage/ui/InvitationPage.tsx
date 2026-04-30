import { HeroSection } from '@widgets/HeroSection';
import { HostsSection } from '@widgets/HostsSection';
import { InvitationIntro } from '@widgets/InvitationIntro';
import { DressCode } from '@widgets/DressCode';
import { GallerySlider } from '@widgets/GallerySlider';
import { RSVPSection } from '@widgets/RSVPSection';
import { SaveDateLocation } from '@widgets/SaveDateLocation';

import styles from './InvitationPage.module.scss';

export function InvitationPage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <InvitationIntro />
      <SaveDateLocation />
      <GallerySlider />
      <DressCode />
      <HostsSection />
      <RSVPSection />
    </main>
  );
}
