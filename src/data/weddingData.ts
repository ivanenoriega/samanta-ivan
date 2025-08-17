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
    "https://picsum.photos/400/400?random=1",
    "https://picsum.photos/400/400?random=2",
    "https://picsum.photos/400/400?random=3",
  ],

  // Social media
  hashtag: "#samantaeivan",
  instagramUrl: "https://www.instagram.com/elquincho.multiespacio/",

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

  // Developer info
  developerInfo: "Desarrollado con ❤️ por samanta-ivan",
};
