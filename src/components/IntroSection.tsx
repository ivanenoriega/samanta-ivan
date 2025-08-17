"use client";

import Image from "next/image";
import { WeddingData } from "@/data/weddingData";

interface IntroSectionProps {
  data: WeddingData;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="hero-image">
          <Image
            src="https://picsum.photos/400/600?random=hero"
            alt="Samanta & Ivan"
            width={400}
            height={600}
            className="hero-img"
            priority
          />
        </div>

        <div className="intro-content">
          <div className="logo-container">
            <Image
              src="/images/logo.svg"
              alt="Wedding Logo"
              width={700}
              height={700}
              className="wedding-logo"
              priority
            />
          </div>

          <div className="date-display">{data.weddingDate}</div>

          <h1 className="couple-names">{data.coupleNames}</h1>

          <blockquote className="quote">&ldquo;{data.quote}&rdquo;</blockquote>
        </div>
      </div>

      <style jsx>{`
        .intro-section {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            var(--chalk-white) 0%,
            var(--linen-beige) 100%
          );
          position: relative;
          overflow: hidden;
        }

        .intro-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
        }

        .hero-image {
          flex: 1;
          position: relative;
        }

        .hero-img {
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 20px 40px var(--shadow-light);
        }

        .intro-content {
          flex: 1;
          text-align: center;
          padding: 2rem;
        }

        .logo-container {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .wedding-logo {
          max-width: 200px;
          height: auto;
          filter: drop-shadow(0 4px 8px var(--shadow-light));
        }

        .date-display {
          font-size: 2rem;
          font-weight: 300;
          color: var(--wood-brown);
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .couple-names {
          font-size: 4rem;
          font-weight: 400;
          color: var(--wood-brown);
          margin-bottom: 2rem;
          font-family: "Playfair Display", serif;
          line-height: 1.2;
        }

        .quote {
          font-size: 1.2rem;
          color: var(--forest-green);
          font-style: italic;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
          position: relative;
        }

        .quote::before {
          content: '"';
          font-size: 3rem;
          color: var(--olive-green);
          position: absolute;
          top: -1rem;
          left: -2rem;
        }

        .quote::after {
          content: '"';
          font-size: 3rem;
          color: var(--olive-green);
          position: absolute;
          bottom: -2rem;
          right: -2rem;
        }

        @media (max-width: 768px) {
          .intro-container {
            flex-direction: column;
            text-align: center;
          }

          .couple-names {
            font-size: 2.5rem;
          }

          .date-display {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
