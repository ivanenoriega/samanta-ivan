"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./DetailsSection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";

interface DetailsSectionProps {
  data: WeddingData;
}

export default function DetailsSection({ data }: DetailsSectionProps) {
  return (
    <Section className={styles.detailsSection}>
      <div className={styles.detailsContainer}>
        <SectionHeading>Detalles del Evento</SectionHeading>

        <div className={styles.eventDetails}>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>📅</div>
            <div className={styles.detailContent}>
              <h3>Día y Hora</h3>
              <p>Sábado 15 de Mayo - {data.weddingTime}</p>
              <a
                href={data.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.primary}`}
              >
                Agendar en Calendario
              </a>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>📍</div>
            <div className={styles.detailContent}>
              <h3>Lugar</h3>
              <p>{data.eventLocation}</p>
              <a
                href={data.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.secondary}`}
              >
                ¿Cómo llegar?
              </a>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>🏠</div>
            <div className={styles.detailContent}>
              <h3>Dirección</h3>
              <p>{data.eventAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
