"use client";

import { WeddingData } from "@/data/weddingData";
import CountdownTimer from "./CountdownTimer";
import styles from "./TimerSection.module.scss";

interface TimerSectionProps {
  data: WeddingData;
}

export default function TimerSection({ data }: TimerSectionProps) {
  return (
    <section className={styles.timerSection}>
      <div className={styles.timerContainer}>
        <div className={styles.timerCircle}>
          <CountdownTimer data={data} />
        </div>
      </div>
    </section>
  );
}
