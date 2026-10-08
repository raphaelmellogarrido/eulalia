// Site lives at the domain root (eulaliarodrigues.com), so assets are served from /images and /videos
export const IMG = "/images/";
export const VID = "/videos/";

// All visible texts live in src/i18n/{en,pt,fr}.ts — the arrays below hold only
// non-text data and must stay in the same order as their translations.

export const serviceEmojis = ["📦", "🎁", "✋", "💬", "🧴", "👗", "📱", "🍼", "🎙️", "📸"];

export const nicheColors = ["bg-blush", "bg-nude", "bg-matcha-soft", "bg-taro", "bg-milk", "bg-blush", "bg-matcha-soft", "bg-taro"];

export const techEmojis = ["🧸", "🎧", "🧴", "🧶", "📦", "☕"];

export type WorkCat = "Beauty" | "Tech" | "Unboxing" | "Fashion" | "Mom life" | "Food";

// Texts for each work are in i18n `work.items[id]`.
export type WorkMedia = {
  id: number;
  img?: string;
  video?: string;
  gallery?: string[];
  cat: WorkCat;
};

export const works: WorkMedia[] = [
  { id: 1, video: `${VID}skin_care.mp4`, cat: "Unboxing" },
  {
    id: 2,
    img: `${IMG}lia_bolsa.jpeg`,
    gallery: [
      `${IMG}lia_bolsa.jpeg`,
      `${IMG}bordado_praia.jpeg`,
      `${IMG}lia_praia.jpeg`,
      `${IMG}lia_bolsa_tablet.jpeg`,
      `${IMG}bordado_caixa.jpeg`,
      `${IMG}sapato_bebe_bordado.jpeg`,
      `${IMG}toca_bebe_bordado.jpeg`,
      `${IMG}bordado_bolsa.jpeg`,
    ],
    cat: "Beauty",
  },
  { id: 3, video: `${VID}unboxing.mp4`, cat: "Tech" },
  { id: 4, video: `${VID}nintendo_switch.mp4`, cat: "Tech" },
  { id: 5, video: `${VID}jantar_familia.mp4`, cat: "Mom life" },
  { id: 6, video: `${VID}minha_camera.mp4`, cat: "Fashion" },
  { id: 7, video: `${VID}food.mp4`, cat: "Food" },
];

export const ageData = [
  { label: "13–17", value: 2.4 },
  { label: "18–24", value: 21.8 },
  { label: "25–34", value: 46.2 },
  { label: "35–44", value: 19.4 },
  { label: "45+", value: 10.2 },
];
