import type { InvitationEvent } from "@entities/event";

export const invitation: InvitationEvent = {
  couple: "Aidana & Dias",
  date: "24.08.2026",
  intro:
    "Мы будем рады разделить с вами день, который станет началом нашей новой семьи.",
  details: [
    { label: "Сбор гостей", value: "17:00" },
    { label: "Церемония", value: "18:00" },
    { label: "Банкет", value: "19:00" },
  ],
  venue: {
    name: "Название ресторана",
    address: "Адрес площадки",
    mapUrl: "https://maps.google.com",
  },
};
