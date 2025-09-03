"use client";

import React, { useState, useEffect } from "react";
import { WeddingData } from "@/data/weddingData";
import styles from "./CountdownTimer.module.scss";

interface CountdownTimerProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ data }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(data.weddingDate);
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data.weddingDate]);

  return (
    <div className={styles.countdownTimer}>
      <div className={styles.timerItem}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Días</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Horas</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minutos</span>
      </div>
      <div className={styles.timerItem}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Segundos</span>
      </div>
    </div>
  );
}
