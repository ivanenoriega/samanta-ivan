"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./FooterSection.module.scss";

interface FooterSectionProps {
  data: WeddingData;
}

export default function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3 className={styles.footerNames}>{data.coupleNames}</h3>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.footerLinks}>
              <a
                href={data.attendanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Confirmar asistencia
              </a>
              <a
                href={data.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Agendar en Calendario
              </a>
              <a href="#gifts" className={styles.footerLink}>
                Dar un regalo
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.socialIcons}>
            <a
              href={data.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              📷
            </a>
            <a href="#" className={styles.socialIcon}>
              📘
            </a>
            <a href="#" className={styles.socialIcon}>
              💬
            </a>
          </div>

          <div className={styles.footerInfo}>
            <p className={styles.developerInfo}>{data.developerInfo}</p>
            <button className={styles.countryButton}>Cambiar país</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
