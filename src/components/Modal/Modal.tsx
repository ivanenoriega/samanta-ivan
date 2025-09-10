"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gallery";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  variant = "default",
}: ModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Store current scroll position
      const scrollY = window.scrollY;
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Restore scroll position and body styles
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const overlayClass =
    variant === "gallery" ? styles.galleryOverlay : styles.modalOverlay;
  const contentClass =
    variant === "gallery" ? styles.galleryContent : styles.modalContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${overlayClass} ${className}`}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={contentClass}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {variant === "default" && title && (
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <button
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
            )}
            {variant === "gallery" && (
              <button
                className={styles.galleryCloseButton}
                onClick={onClose}
                aria-label="Cerrar modal"
              >
                ×
              </button>
            )}
            <div
              className={
                variant === "gallery" ? styles.galleryBody : styles.modalBody
              }
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
