"use client";

import { WeddingData } from "@/data/weddingData";

interface DetailsSectionProps {
  data: WeddingData;
}

export default function DetailsSection({ data }: DetailsSectionProps) {
  return (
    <section className="details-section">
      <div className="details-container">
        <h2 className="section-title">Detalles del Evento</h2>

        <div className="event-details">
          <div className="detail-item">
            <div className="detail-icon">📅</div>
            <div className="detail-content">
              <h3>Día y Hora</h3>
              <p>Sábado 15 de Mayo - {data.weddingTime}</p>
              <a
                href={data.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button primary"
              >
                Agendar en Calendario
              </a>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">📍</div>
            <div className="detail-content">
              <h3>Lugar</h3>
              <p>{data.eventLocation}</p>
              <a
                href={data.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button secondary"
              >
                ¿Cómo llegar?
              </a>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🏠</div>
            <div className="detail-content">
              <h3>Dirección</h3>
              <p>{data.eventAddress}</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">✅</div>
            <div className="detail-content">
              <h3>Confirmar Asistencia</h3>
              <p>Por favor confirma tu asistencia</p>
              <a
                href={data.attendanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button primary"
              >
                Confirmar Asistencia
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .details-section {
          background: var(--chalk-white);
          padding: 4rem 2rem;
        }

        .details-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--wood-brown);
          margin-bottom: 3rem;
          font-family: "Playfair Display", serif;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: var(--surface);
          border-radius: 15px;
          border-left: 4px solid var(--wood-brown);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .detail-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px var(--shadow-light);
        }

        .detail-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .detail-content {
          flex: 1;
        }

        .detail-content h3 {
          font-size: 1.3rem;
          color: var(--wood-brown);
          margin-bottom: 0.5rem;
          font-family: "Playfair Display", serif;
        }

        .detail-content p {
          color: var(--smoke-gray);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .action-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .action-button.primary {
          background: var(--wood-brown);
          color: var(--chalk-white);
        }

        .action-button.primary:hover {
          background: var(--forest-green);
          transform: translateY(-2px);
        }

        .action-button.secondary {
          background: transparent;
          color: var(--wood-brown);
          border: 2px solid var(--wood-brown);
        }

        .action-button.secondary:hover {
          background: var(--wood-brown);
          color: var(--chalk-white);
        }

        @media (max-width: 768px) {
          .detail-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
