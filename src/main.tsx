import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@app/App';
import { invitation } from '@shared/config/invitation';
import '@app/styles/global.scss';

/** Tab title: `VITE_INVITATION_TITLE` from `.env` if set; else `{couple} — Үйлену тойы` from config (HTML `%`-placeholders stay literal when env missing). */
const envTitle = import.meta.env.VITE_INVITATION_TITLE?.trim();
document.title =
  envTitle && envTitle.length > 0 ? envTitle : `${invitation.couple} — Үйлену тойы`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
