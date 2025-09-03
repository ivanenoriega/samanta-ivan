import React from "react";
import CountdownTimer from "../CountdownTimer";

// Example usage of the CountdownTimer component
export function CountdownTimerExamples() {
  // Example wedding data
  const sampleWeddingData = {
    coupleNames: "Samanta & Ivan",
    weddingDate: "22.11.2025",
    weddingTime: "16:00",
    quote:
      "Todos somos mortales, hasta el primer beso y la segunda copa de vino",
    eventLocation: "El Quincho Multiespacio",
    eventAddress: "Blas Pascal 5940, X5021 Córdoba",
    galleryImages: [],
    hashtag: "#samantaeivan",
    instagramUrl:
      "https://www.instagram.com/explore/search/keyword/?q=%23samantaeivan",
    calendarUrl: "https://calendar.google.com/event?action=TEMPLATE&tmeid=...",
    attendanceUrl: "https://forms.google.com/attendance",
    directionsUrl: "https://maps.google.com/?q=...",
    giftInfo: "Sample gift info",
    dressCodeInfo: "Sample dress code info",
    tipsInfo: "Sample tips info",
    developerInfo: "Desarrollado con ❤️ por samanta-ivan",
  };

  return (
    <div>
      {/* Default usage with wedding data */}
      <CountdownTimer data={sampleWeddingData} />
    </div>
  );
}
