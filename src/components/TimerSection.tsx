"use client";

import { useState, useEffect } from "react";
import { WeddingData } from "@/data/weddingData";

interface TimerSectionProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimerSection({ data }: TimerSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Parse the date from DD.MM.YYYY format
      const [day, month, year] = data.weddingDate.split(".");
      const [hours, minutes] = data.weddingTime.split(":");

      // Create the wedding date object (month is 0-indexed in JavaScript Date)
      const weddingDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes),
        0
      );

      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Wedding has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data.weddingDate, data.weddingTime]);

  return (
    <section className="timer-section">
      <div className="timer-container">
        <div className="timer-circle">
          <div className="timer-content">
            <h3 className="timer-title">Falta</h3>
            <div className="timer-grid">
              <div className="timer-item">
                <span className="timer-number">{timeLeft.days}</span>
                <span className="timer-label">días</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.hours}</span>
                <span className="timer-label">hs</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.minutes}</span>
                <span className="timer-label">min</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.seconds}</span>
                <span className="timer-label">seg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timer-section {
          background: linear-gradient(
            135deg,
            var(--linen-beige) 0%,
            var(--surface) 100%
          );
          padding: 4rem 2rem;
          position: relative;
        }

        .timer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }

        .timer-circle {
          background: var(--chalk-white);
          border-radius: 50%;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px var(--shadow-light);
          border: 3px solid var(--wood-brown);
          position: relative;
        }

        .timer-circle::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid var(--olive-green);
          border-radius: 50%;
          z-index: -1;
        }

        .timer-content {
          text-align: center;
        }

        .timer-title {
          font-size: 1.5rem;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .timer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .timer-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timer-number {
          font-size: 2rem;
          font-weight: bold;
          color: var(--wood-brown);
          font-family: "Playfair Display", serif;
        }

        .timer-label {
          font-size: 0.9rem;
          color: var(--forest-green);
          text-transform: lowercase;
        }

        @media (max-width: 768px) {
          .timer-circle {
            width: 250px;
            height: 250px;
          }

          .timer-number {
            font-size: 1.5rem;
          }

          .timer-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
