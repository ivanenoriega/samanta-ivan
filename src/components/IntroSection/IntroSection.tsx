"use client";

import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import CountdownTimer from "../TimerSection/CountdownTimer";
import styles from "./IntroSection.module.scss";

interface IntroSectionProps {
  data: WeddingData;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.svg"
            alt="Wedding Logo"
            width={500}
            height={500}
            className={styles.weddingLogo}
            priority
          />
          <CountdownTimer data={data} />
        </div>
      </div>
    </section>
  );
}
