"use client";

import { useState } from "react";
import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import styles from "./GallerySection.module.scss";

interface GallerySectionProps {
  data: WeddingData;
}

export default function GallerySection({ data }: GallerySectionProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % data.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? data.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.sectionTitle}>Retratos de Nuestro Amor</h2>
          <p className={styles.sectionSubtitle}>
            Un minuto, un segundo, un instante que queda en la eternidad
          </p>
          <div className={styles.cameraIcon}>📷</div>
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
    </section>
  );
}
