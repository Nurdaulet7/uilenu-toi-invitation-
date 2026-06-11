import { Analytics } from '@vercel/analytics/react';

import { InvitationPage } from '@pages/InvitationPage';

export function App() {
  return (
    <>
      <InvitationPage />
      <Analytics />
    </>
  );
}
