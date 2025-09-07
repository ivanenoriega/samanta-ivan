export interface BankingInfo {
  bankName: string;
  accountHolder: string;
  cbu: string;
  alias: string;
}

export interface WeddingData {
  // Couple information
  coupleNames: string;
  weddingDate: string;
  weddingTime: string;
  quote: string;

  // Event details
  eventLocation: string;
  eventAddress: string;

  // Gallery
  galleryImages: string[];

  // Social media
  hashtag: string;
  instagramUrl: string;

  // Contact and actions
  calendarUrl: string;
  attendanceUrl: string;
  directionsUrl: string;
  giftInfo: string;
  dressCodeInfo: string;
  tipsInfo: string;

  // Banking information
  bankingInfo: BankingInfo;

  // Developer info
  developerInfo: string;
}

export const weddingData: WeddingData = {
  // Couple information
  coupleNames: "Samanta & Ivan",
  weddingDate: "22.11.2025",
  weddingTime: "16:00",
  quote: "Todos somos mortales, hasta el primer beso y la segunda copa de vino",

  // Event details
  eventLocation: "El Quincho Multiespacio",
  eventAddress: "Blas Pascal 5940, X5021 Córdoba",

  // Gallery - placeholder images (you can replace with actual image URLs)
  galleryImages: [
    "/images/gallery/IMG_2260.jpg",
    "/images/gallery/IMG_2286.jpg",
    "/images/gallery/IMG_2467.jpg",
    "/images/gallery/IMG_3458.jpg",
    "/images/gallery/IMG_3558.jpg",
    "/images/gallery/IMG_5299.jpg",
    "/images/gallery/IMG_5448.jpg",
    "/images/gallery/IMG_5482.jpg",
    "/images/gallery/IMG_6622.jpg",
    "/images/gallery/IMG_6624.jpg",
    "/images/gallery/IMG_6625.jpg",
    "/images/gallery/IMG_6627.jpg",
    "/images/gallery/IMG_6672.jpg",
    "/images/gallery/IMG_7036.jpg",
    "/images/gallery/IMG_7756.jpg",
    "/images/gallery/IMG_7757.jpg",
    "/images/gallery/IMG_7765.jpg",
    "/images/gallery/IMG_7766.jpg",
    "/images/gallery/IMG_7767.jpg",
    "/images/gallery/IMG_9002.jpg",
  ],

  // Social media
  hashtag: "#samantaeivan",
  instagramUrl:
    "https://www.instagram.com/explore/search/keyword/?q=%23samantaeivan",

  // Contact and actions
  calendarUrl: "https://calendar.google.com/event?action=TEMPLATE&tmeid=...",
  attendanceUrl: "https://forms.google.com/attendance",
  directionsUrl: "https://maps.google.com/?q=...",
  giftInfo:
    "Si deseas regalarnos algo más que tu hermosa presencia, puedes hacerlo a través de transferencia bancaria o en efectivo el día del evento. Tu presencia es el mejor regalo.",
  dressCodeInfo:
    "Dress Code: Elegante Sport. Colores sugeridos: tonos pasteles y colores neutros. Evitar blanco y negro.",
  tipsInfo:
    "• Llegar 15 minutos antes del horario indicado\n• No olvides confirmar tu asistencia\n• Comparte tus fotos con el hashtag #samantaeivan\n• Estacionamiento disponible en el lugar",

  // Banking information
  bankingInfo: {
    bankName: "Rebanking",
    accountHolder: "Ivan Emiliano Noriega",
    cbu: "4150999718003595680027",
    alias: "samantaeivan",
  },

  // Developer info
  developerInfo: "Desarrollado con ❤️ por samanta-ivan",
};
