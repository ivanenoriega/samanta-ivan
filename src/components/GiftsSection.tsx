"use client";

import { useState } from "react";
import { WeddingData } from "@/data/weddingData";

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-body">
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--shadow-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: var(--chalk-white);
          border-radius: 15px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--wood-brown);
          line-height: 1;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .modal-body {
          color: var(--smoke-gray);
          line-height: 1.6;
        }

        .modal-body p {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default function GiftsSection({ data }: GiftsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="gifts-section">
      <div className="gifts-container">
        <h2 className="section-title">Regalos</h2>
        <p className="section-subtitle">
          Si deseas regalarnos algo más que tu hermosa presencia...
        </p>

        <div className="gifts-content">
          <div className="gift-icon">🎁</div>
          <button className="gift-button" onClick={() => setIsModalOpen(true)}>
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

      <style jsx>{`
        .gifts-section {
          background: linear-gradient(135deg, var(--linen-beige) 0%, var(--surface) 100%);
          padding: 4rem 2rem;
        }

        .gifts-container {
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

        .gifts-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .gift-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .gift-button {
          background: var(--wood-brown);
          color: var(--chalk-white);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px var(--shadow-light);
        }

        .gift-button:hover {
          background: var(--forest-green);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px var(--shadow-medium);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .gift-icon {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
