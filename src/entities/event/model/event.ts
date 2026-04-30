export type EventDetail = {
  label: string;
  value: string;
};

export type InvitationEvent = {
  couple: string;
  date: string;
  intro: {
    title: string;
    paragraphs: string[];
  };
  saveDate: {
    title: string;
    date: string;
    text: string;
    image: string;
  };
  details: EventDetail[];
  venue: {
    name: string;
    address: string;
    mapUrl: string;
    time: string;
    city: string;
    image: string;
  };
  gallery: {
    title: string;
    images: Array<{ src: string; alt: string }>;
  };
  dressCode: {
    title: string;
    paragraphs: string[];
    ladies: {
      label: string;
      colors: string[];
    };
    men: {
      label: string;
      colors: string[];
    };
  };
  hosts: {
    title: string;
    names: string;
  };
  countdown: {
    title: string;
    /** Фондық сурет жолы (мыс. /images/hero.webp) */
    backgroundImage: string;
    /** Алматы уақытын немесе қолайлы ISO (мыс.: 2025-09-27T16:00:00+05:00) */
    startsAtISO: string;
    /** Санақ аяқталғанда көрсетілетін жол */
    expiredMessage?: string;
  };
  closing: {
    lines: string[];
  };
};
