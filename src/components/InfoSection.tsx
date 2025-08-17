"use client";

import { useState } from "react";
import { WeddingData } from "@/data/weddingData";

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
    <section className="info-section">
      <div className="info-container">
        <h2 className="section-title">Fiesta</h2>
        <p className="section-subtitle">
          Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en
          cuenta.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">🎵</div>
            <h3>MÚSICA</h3>
            <p>
              ¿Cuál es la canción que no debe faltar en la Playlist de la
              fiesta?
            </p>
            <button className="card-button">Sugerir canción</button>
          </div>

          <div className="info-card">
            <div className="card-icon">👔</div>
            <h3>DRESS CODE</h3>
            <p>Una orientación para tu vestimenta</p>
            <button
              className="card-button"
              onClick={() => openModal("dressCode")}
            >
              Ver más
            </button>
          </div>

          <div className="info-card">
            <div className="card-icon">📝</div>
            <h3>TIPS Y NOTAS</h3>
            <p>Información adicional para tener en cuenta</p>
            <button className="card-button" onClick={() => openModal("tips")}>
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

      <style jsx>{`
        .info-section {
          background: var(--chalk-white);
          padding: 4rem 2rem;
        }

        .info-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: var(--forest-green);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: var(--surface);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px var(--shadow-light);
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: var(--wood-brown);
          box-shadow: 0 15px 30px var(--shadow-medium);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.3rem;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .info-card p {
          color: var(--smoke-gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .card-button {
          background: var(--wood-brown);
          color: var(--chalk-white);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .card-button:hover {
          background: var(--forest-green);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .info-cards {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
