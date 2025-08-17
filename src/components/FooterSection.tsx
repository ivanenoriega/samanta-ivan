"use client";

import { WeddingData } from "@/data/weddingData";

interface FooterSectionProps {
  data: WeddingData;
}

export default function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-names">{data.coupleNames}</h3>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <a
                href={data.attendanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Confirmar asistencia
              </a>
              <a
                href={data.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Agendar en Calendario
              </a>
              <a href="#gifts" className="footer-link">
                Dar un regalo
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a
              href={data.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              📷
            </a>
            <a href="#" className="social-icon">
              📘
            </a>
            <a href="#" className="social-icon">
              💬
            </a>
          </div>

          <div className="footer-info">
            <p className="developer-info">{data.developerInfo}</p>
            <button className="country-button">Cambiar país</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: var(--wood-brown);
          color: white;
          padding: 3rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-left {
          flex: 1;
          min-width: 200px;
        }

        .footer-names {
          font-size: 2rem;
          font-family: "Playfair Display", serif;
          margin: 0;
        }

        .footer-right {
          flex: 1;
          min-width: 300px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .footer-link:hover {
          border-bottom-color: white;
          transform: translateX(5px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          font-size: 1.5rem;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.2);
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .developer-info {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.8;
        }

        .country-button {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .country-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-info {
            align-items: center;
          }

          .footer-names {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
