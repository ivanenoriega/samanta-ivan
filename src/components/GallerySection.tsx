"use client";

import { useState } from "react";
import Image from "next/image";
import { WeddingData } from "@/data/weddingData";

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
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Retratos de Nuestro Amor</h2>
          <p className="section-subtitle">
            Un minuto, un segundo, un instante que queda en la eternidad
          </p>
          <div className="camera-icon">📷</div>
        </div>

        <div className="gallery-carousel">
          <button
            className="carousel-button prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {data.galleryImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <Image
                    src={image}
                    alt={`Samanta & Ivan - Photo ${index + 1}`}
                    width={400}
                    height={400}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-button next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {data.galleryImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImage ? "active" : ""}`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          background: linear-gradient(135deg, var(--surface) 0%, var(--linen-beige) 100%);
          padding: 4rem 2rem;
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--forest-green);
          margin-bottom: 1rem;
          font-style: italic;
        }

        .camera-icon {
          font-size: 2rem;
          margin-top: 1rem;
        }

        .gallery-carousel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .carousel-container {
          width: 400px;
          height: 400px;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 40px var(--shadow-light);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          height: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-button {
          background: var(--wood-brown-transparent);
          color: var(--chalk-white);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-button:hover {
          background: var(--wood-brown);
          transform: scale(1.1);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: var(--wood-brown-transparent);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--wood-brown);
          transform: scale(1.2);
        }

        .dot:hover {
          background: var(--olive-green);
        }

        @media (max-width: 768px) {
          .carousel-container {
            width: 300px;
            height: 300px;
          }

          .section-title {
            font-size: 2rem;
          }

          .carousel-button {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
