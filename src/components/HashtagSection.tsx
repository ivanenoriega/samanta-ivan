"use client";

import { WeddingData } from "@/data/weddingData";

interface HashtagSectionProps {
  data: WeddingData;
}

export default function HashtagSection({ data }: HashtagSectionProps) {
  return (
    <section className="hashtag-section">
      <div className="hashtag-container">
        <h2 className="section-title">Compartimos este día junto a vos</h2>
        <p className="section-subtitle">
          Compartí tus fotos y videos de ese hermoso día
        </p>

        <div className="hashtag-content">
          <div className="instagram-icon">📸</div>
          <div className="hashtag-display">{data.hashtag}</div>
          <a
            href={data.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Ver en Instagram
          </a>
        </div>
      </div>

      <style jsx>{`
        .hashtag-section {
          background: white;
          padding: 4rem 2rem;
        }

        .hashtag-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
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
          margin-bottom: 3rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .hashtag-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .instagram-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .hashtag-display {
          font-size: 3rem;
          font-weight: bold;
          color: var(--wood-brown);
          font-family: "Playfair Display", serif;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .instagram-button {
          background: var(--wood-brown);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          display: inline-block;
        }

        .instagram-button:hover {
          background: var(--forest-green);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .hashtag-display {
            font-size: 2rem;
          }

          .instagram-icon {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
