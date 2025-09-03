"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./ItinerarySection.module.scss";
import { SectionHeading } from "../SectionHeading";

interface ItinerarySectionProps {
  data: WeddingData;
}

export default function ItinerarySection({ data }: ItinerarySectionProps) {
  const itineraryEvents = [
    {
      time: "12:00 hs",
      event: "Ceremonia civil",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      position: "left" as const,
    },
    {
      time: "17:00 hs",
      event: "Recepción",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      position: "right" as const,
    },
    {
      time: "18:00 hs",
      event: "Llegan los novios",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      position: "left" as const,
    },
    {
      time: "21:00 hs",
      event: "Brindis y torta",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="1" x2="8" y2="3" />
          <line x1="16" y1="1" x2="16" y2="3" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
          <path d="M9 13h.01" />
          <path d="M15 13h.01" />
        </svg>
      ),
      position: "right" as const,
    },
    {
      time: "00:00 hs",
      event: "Despedida",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      ),
      position: "left" as const,
    },
  ];

  return (
    <section className={styles.itinerarySection}>
      <div className={styles.itineraryContainer}>
        <SectionHeading>Itinerario</SectionHeading>

        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {itineraryEvents.map((event, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${styles[event.position]}`}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.markerCircle} />
                </div>

                <div className={styles.eventContent}>
                  <div className={styles.eventIcon}>{event.icon}</div>
                  <div className={styles.eventDetails}>
                    <div className={styles.eventTime}>{event.time}</div>
                    <div className={styles.eventName}>{event.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
