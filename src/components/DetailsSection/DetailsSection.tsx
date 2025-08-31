"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./DetailsSection.module.scss";

interface DetailsSectionProps {
  data: WeddingData;
}

export default function DetailsSection({ data }: DetailsSectionProps) {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.detailsContainer}>
        <h2 className={styles.sectionTitle}>Detalles del Evento</h2>

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

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>✅</div>
            <div className={styles.detailContent}>
              <h3>Confirmar Asistencia</h3>
              <p>Por favor confirma tu asistencia</p>
              <a
                href={data.attendanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.primary}`}
              >
                Confirmar Asistencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
