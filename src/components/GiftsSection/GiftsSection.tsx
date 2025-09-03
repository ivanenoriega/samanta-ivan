"use client";

import { useState } from "react";
import { WeddingData } from "@/data/weddingData";
import styles from "./GiftsSection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";

interface GiftsSectionProps {
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

export default function GiftsSection({ data }: GiftsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section className={styles.giftsSection}>
      <div className={styles.giftsContainer}>
        <SectionHeading>Regalos</SectionHeading>
        <p className={styles.sectionSubtitle}>
          Si deseas regalarnos algo más que tu hermosa presencia...
        </p>

        <div className={styles.giftsContent}>
          <div className={styles.giftIcon}>🎁</div>
          <button
            className={styles.giftButton}
            onClick={() => setIsModalOpen(true)}
          >
            Ver más
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Información sobre Regalos"
        content={data.giftInfo}
      />
    </Section>
  );
}
