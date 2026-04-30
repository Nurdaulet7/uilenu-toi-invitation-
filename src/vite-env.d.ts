/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_INVITATION_TITLE?: string;
  readonly VITE_RSVP_TELEGRAM_BOT_TOKEN?: string;
  readonly VITE_RSVP_TELEGRAM_CHAT_ID?: string;
}
