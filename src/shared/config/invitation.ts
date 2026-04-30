import type { InvitationEvent } from "@entities/event";

export const invitation: InvitationEvent = {
  couple: "Аяулым & Арман",
  date: "27 қыркүйек 2025",
  intro: {
    title: "Қадірлі қонақтар!",
    paragraphs: [
      "Жүректе мәңгілікке сақталатын сәттер бар. Біздің жүрегіміз үшін ол — шаңырақ көтерер күн, қуанышқа толы ақ тілек күні.",
      "Бұл бақытты сәтімізді ардақты отбасымызбен, қадірлі достарымызбен бірге өткізу – біз үшін үлкен мәртебе.",
      "Өйткені бақытты бөліскен сайын, ол шаттыққа айналып, нұрлы жүз есе арта түседі.",
    ],
  },
  saveDate: {
    title: "Той салтанаты:",
    date: "27 қыркүйек 2025",
    text: "біз бір отбасы болатын керемет күн",
    image: "/images/save-date.webp",
  },
  details: [
    { label: "Қонақтардың жиналуы", value: "16:00" },
    { label: "Мекен-жайымыз", value: "Crystal hall" },
    { label: "Қала", value: "Алматы" },
  ],
  venue: {
    name: '"Crystal hall" мейрамханасы',
    address: 'Алматы қаласы, "Crystal hall" мейрамханасы',
    city: "Алматы қаласы",
    time: "16:00",
    mapUrl: "https://2gis.kz/almaty",
    image: "/images/location.webp",
  },
  gallery: {
    title: "Сүйікті сәттер",
    images: [
      { src: "/images/save-date.webp", alt: "" },
      { src: "/images/location.webp", alt: "" },
      { src: "/images/hero.webp", alt: "" },
    ],
  },
  dressCode: {
    title: "Dress code",
    paragraphs: [
      "Бұл күн біздің жүрегімізде жарық естеліктермен және нәзіктікке толы болғанын қалаймыз.",
      "Сұлу арулар нәзік ашық түсті таңдап, жігіттер сәнді костюм кигенін сұраймыз.",
    ],
    ladies: {
      label: "Ханымдар",
      colors: ["#d8cdb9", "#e1babb", "#fcebd7", "#e1c6b3", "#be9275"],
    },
    men: {
      label: "Ерлер",
      colors: ["#0a080b", "#50311d", "#806248", "#a5907b", "#d3cbbe"],
    },
  },
};
