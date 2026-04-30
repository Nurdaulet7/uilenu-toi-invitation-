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
};
