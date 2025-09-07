"use client";

import { useState } from "react";
import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import styles from "./GallerySection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";

interface GallerySectionProps {
  data: WeddingData;
}

export default function GallerySection({ data }: GallerySectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrentImage, setModalCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % data.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? data.galleryImages.length - 1 : prev - 1
    );
  };

  const nextModalImage = () => {
    setModalCurrentImage((prev) => (prev + 1) % data.galleryImages.length);
  };

  const prevModalImage = () => {
    setModalCurrentImage((prev) =>
      prev === 0 ? data.galleryImages.length - 1 : prev - 1
    );
  };

  const openModal = (index: number) => {
    setModalCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      prevModalImage();
    } else if (e.key === "ArrowRight") {
      nextModalImage();
    }
  };

  return (
    <>
      <Section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeader}>
            <SectionHeading>Retratos de Nuestro Amor</SectionHeading>
            <p className={styles.sectionSubtitle}>
              Un minuto, un segundo, un instante que queda en la eternidad
            </p>
          </div>

          <div className={styles.galleryCarousel}>
            <button
              className={styles.carouselButton}
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className={styles.carouselContainer}>
              <div
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentImage * 100}%)`,
                }}
              >
                {data.galleryImages.map((image, index) => (
                  <div key={index} className={styles.carouselSlide}>
                    <Image
                      src={image}
                      alt={`Samanta & Ivan - Photo ${index + 1}`}
                      width={400}
                      height={400}
                      className={styles.galleryImage}
                      onClick={() => openModal(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className={styles.carouselButton}
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div className={styles.carouselDots}>
            {data.galleryImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentImage ? styles.active : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className={styles.modalCarousel}>
              <button
                className={styles.modalCarouselButton}
                onClick={prevModalImage}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div className={styles.modalImageContainer}>
                <Image
                  src={data.galleryImages[modalCurrentImage]}
                  alt={`Samanta & Ivan - Photo ${modalCurrentImage + 1}`}
                  fill
                  className={styles.modalImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>

              <button
                className={styles.modalCarouselButton}
                onClick={nextModalImage}
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className={styles.modalDots}>
              {data.galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.modalDot} ${
                    index === modalCurrentImage ? styles.active : ""
                  }`}
                  onClick={() => setModalCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div className={styles.modalCounter}>
              {modalCurrentImage + 1} / {data.galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
