export type EventDetail = {
  label: string;
  value: string;
};

export type InvitationEvent = {
  couple: string;
  date: string;
  intro: string;
  details: EventDetail[];
  venue: {
    name: string;
    address: string;
    mapUrl: string;
  };
};
