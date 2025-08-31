"use client";

import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import styles from "./IntroSection.module.scss";

interface IntroSectionProps {
  data: WeddingData;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContainer}>
        <div className={styles.heroImage}>
          <Image
            src="https://picsum.photos/400/600?random=hero"
            alt="Samanta & Ivan"
            width={400}
            height={600}
            className={styles.heroImg}
            priority
          />
        </div>

        <div className={styles.introContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo.svg"
              alt="Wedding Logo"
              width={700}
              height={700}
              className={styles.weddingLogo}
              priority
            />
          </div>

          <div className={styles.dateDisplay}>{data.weddingDate}</div>

          <h1 className={styles.coupleNames}>{data.coupleNames}</h1>

          <blockquote className={styles.quote}>{data.quote}</blockquote>
        </div>
      </div>
    </section>
  );
}
