import type { InvitationEvent } from "@entities/event";

export const invitation: InvitationEvent = {
  couple: "Диас & Айдана",
  date: "6 маусым 2026",
  intro: {
    title: "Қадірлі қонақтар!",
    paragraphs: [
      "Жүректе мәңгілікке сақталатын сәттер бар. Біздің жүрегіміз үшін ол — шаңырақ көтерер күн, қуанышқа толы ақ тілек күні.",
      "Бұл бақытты сәтімізді ардақты отбасымызбен, қадірлі достарымызбен бірге өткізу – біз үшін үлкен мәртебе.",
      "Өйткені бақытты бөліскен сайын, ол шаттыққа айналып, нұрлы жүз есе арта түседі.",
    ],
  },
  saveDate: {
    title: "Той күні:",
    date: "6 маусым 2026",
    text: "біз бір отбасы болатын керемет күн",
    image: "/images/save-date.webp",
  },
  details: [
    { label: "Қонақтардың жиналуы", value: "16:00" },
    { label: "Мекен-жайымыз", value: "Dariya" },
    { label: "Қала", value: "Қызылорда" },
  ],
  venue: {
    name: '"Dariya" мейрамханасы',
    address: 'Қызылорда қаласы, "Dariya" мейрамханасы',
    city: "Қызылорда қаласы",
    time: "16:00",
    mapUrl:
      "https://2gis.kz/kyzylorda/geo/70000001077453606/65.531481,44.790043",
    image: "/images/location.webp",
  },
  gallery: {
    title: "Сүйікті сәттер",
    images: [
      { src: "/images/gallery-10.webp", alt: "" },
      { src: "/images/gallery-11.webp", alt: "" },
      { src: "/images/gallery-12.webp", alt: "" },
      { src: "/images/gallery-1.webp", alt: "" },
      { src: "/images/gallery-4.webp", alt: "" },
      { src: "/images/gallery-5.webp", alt: "" },
      { src: "/images/gallery-9.webp", alt: "" },
      { src: "/images/gallery-8.webp", alt: "" },
      { src: "/images/gallery-3.webp", alt: "" },
      { src: "/images/gallery-7.webp", alt: "" },
      { src: "/images/gallery-6.webp", alt: "" },
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
  hosts: {
    title: "Той иелері:",
    names: "Нұрбол мен Нұргүл",
  },
  countdown: {
    title: "Той салтанатына дейін",
    backgroundImage: "/images/countdown.webp",
    startsAtISO: "2026-06-06T16:00:00+05:00",
    expiredMessage: "Құттықтаймыз! Бұл күн ең жарқын естеліктерге толсын.",
  },
  timeline: {
    title: "Той бағдарламасы",
    events: [
      { time: "18:00", label: "Беташар" },
      { time: "19:00", label: "Той салтанаты" },
    ],
  },
  closing: {
    lines: ["Келіңіздер,", "тойымыздың қадірлі қонағы болыңыздар!"],
  },
};
