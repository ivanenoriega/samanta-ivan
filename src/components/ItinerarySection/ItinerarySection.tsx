"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./ItinerarySection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";
import Image from "next/image";

interface ItinerarySectionProps {
  data: WeddingData;
}

export default function ItinerarySection({ data }: ItinerarySectionProps) {
  const itineraryEvents = [
    {
      time: "12:00 hs",
      event: "Ceremonia civil",
      icon: (
        <Image
          src="/images/icons/marriage-contract.png"
          alt="Ceremonia civil"
          width={24}
          height={24}
        />
      ),
      position: "left" as const,
    },
    {
      time: "17:00 hs",
      event: "Recepción",
      icon: (
        <Image
          src="/images/icons/placeholder.png"
          alt="Recepción"
          width={24}
          height={24}
        />
      ),
      position: "right" as const,
    },
    {
      time: "18:00 hs",
      event: "Llegan los novios",
      icon: (
        <Image
          src="/images/icons/wedding-couple.png"
          alt="Llegan los novios"
          width={24}
          height={24}
        />
      ),
      position: "left" as const,
    },
    {
      time: "21:00 hs",
      event: "Brindis y torta",
      icon: (
        <Image
          src="/images/icons/wedding-cake.png"
          alt="Brindis y torta"
          width={24}
          height={24}
        />
      ),
      position: "right" as const,
    },
    {
      time: "00:00 hs",
      event: "Despedida",
      icon: (
        <Image
          src="/images/icons/just-married.png"
          alt="Despedida"
          width={24}
          height={24}
        />
      ),
      position: "left" as const,
    },
  ];

  return (
    <Section className={styles.itinerarySection}>
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
    </Section>
  );
}
