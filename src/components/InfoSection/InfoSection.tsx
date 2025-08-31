"use client";

import { useState } from "react";
import { WeddingData } from "@/data/weddingData";
import styles from "./InfoSection.module.scss";

interface InfoSectionProps {
  data: WeddingData;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

function Modal({ isOpen, onClose, title, content }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>
        <h3 className={styles.modalTitle}>{title}</h3>
        <div className={styles.modalBody}>
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InfoSection({ data }: InfoSectionProps) {
  const [modalState, setModalState] = useState({
    dressCode: false,
    tips: false,
  });

  const openModal = (modal: "dressCode" | "tips") => {
    setModalState((prev) => ({ ...prev, [modal]: true }));
  };

  const closeModal = (modal: "dressCode" | "tips") => {
    setModalState((prev) => ({ ...prev, [modal]: false }));
  };

  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContainer}>
        <h2 className={styles.sectionTitle}>Fiesta</h2>
        <p className={styles.sectionSubtitle}>
          Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en
          cuenta.
        </p>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>🎵</div>
            <h3>MÚSICA</h3>
            <p>
              ¿Cuál es la canción que no debe faltar en la Playlist de la
              fiesta?
            </p>
            <button className={styles.cardButton}>Sugerir canción</button>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>👔</div>
            <h3>DRESS CODE</h3>
            <p>Una orientación para tu vestimenta</p>
            <button
              className={styles.cardButton}
              onClick={() => openModal("dressCode")}
            >
              Ver más
            </button>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>📝</div>
            <h3>TIPS Y NOTAS</h3>
            <p>Información adicional para tener en cuenta</p>
            <button
              className={styles.cardButton}
              onClick={() => openModal("tips")}
            >
              + Info
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalState.dressCode}
        onClose={() => closeModal("dressCode")}
        title="Dress Code"
        content={data.dressCodeInfo}
      />

      <Modal
        isOpen={modalState.tips}
        onClose={() => closeModal("tips")}
        title="Tips y Notas"
        content={data.tipsInfo}
      />
    </section>
  );
}
