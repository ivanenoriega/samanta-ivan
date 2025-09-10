"use client";

import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import CountdownTimer from "../TimerSection/CountdownTimer";
import CalendarButton from "../CalendarButton/CalendarButton";
import styles from "./IntroSection.module.scss";
import Section from "../Section";

interface IntroSectionProps {
  data: WeddingData;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <Section className={styles.introSection}>
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
          <CalendarButton data={data} />
        </div>
      </div>
    </Section>
  );
}
