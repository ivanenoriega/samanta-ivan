"use client";

import { BankingInfo } from "@/data/weddingData";
import Modal from "../Modal";
import styles from "./BankingInfoModal.module.scss";

interface BankingInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  bankingInfo: BankingInfo;
}

export default function BankingInfoModal({
  isOpen,
  onClose,
  bankingInfo,
}: BankingInfoModalProps) {
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
      console.log(`${label} copiado al portapapeles`);
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Datos bancarios">
      <div className={styles.bankingInfo}>
        <div className={styles.bankingDetails}>
          <div className={styles.bankingItem}>
            <label className={styles.label}>Banco:</label>
            <div className={styles.value}>{bankingInfo.bankName}</div>
          </div>

          <div className={styles.bankingItem}>
            <label className={styles.label}>Titular:</label>
            <div className={styles.value}>{bankingInfo.accountHolder}</div>
          </div>

          <div className={styles.bankingItem}>
            <label className={styles.label}>CBU:</label>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{bankingInfo.cbu}</span>
              <button
                className={styles.copyButton}
                onClick={() => copyToClipboard(bankingInfo.cbu, "CBU")}
                title="Copiar CBU"
              >
                📋
              </button>
            </div>
          </div>

          <div className={styles.bankingItem}>
            <label className={styles.label}>Alias:</label>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{bankingInfo.alias}</span>
              <button
                className={styles.copyButton}
                onClick={() => copyToClipboard(bankingInfo.alias, "Alias")}
                title="Copiar alias"
              >
                📋
              </button>
            </div>
          </div>
        </div>

        <div className={styles.note}>
          <p>
            <strong>Nota:</strong> También puedes entregar tu regalo en efectivo
            el día del evento.
          </p>
        </div>
      </div>
    </Modal>
  );
}
