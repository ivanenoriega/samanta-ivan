"use client";

import React, { useState, useEffect } from "react";
import { WeddingData } from "@/data/weddingData";
import styles from "./TimerSection.module.scss";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  data: WeddingData;
  title?: string;
  labels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  className?: string;
}

export default function CountdownTimer({
  data,
  title = "Falta",
  labels = {
    days: "días",
    hours: "hs",
    minutes: "min",
    seconds: "seg",
  },
  className,
}: CountdownTimerProps) {
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
    <div className={`${styles.timerContent} ${className || ""}`}>
      <div className={styles.timerGrid}>
        <div className={styles.timerItem}>
          <span className={styles.timerNumber}>{timeLeft.days}</span>
          <span className={styles.timerLabel}>{labels.days}</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerNumber}>{timeLeft.hours}</span>
          <span className={styles.timerLabel}>{labels.hours}</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerNumber}>{timeLeft.minutes}</span>
          <span className={styles.timerLabel}>{labels.minutes}</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerNumber}>{timeLeft.seconds}</span>
          <span className={styles.timerLabel}>{labels.seconds}</span>
        </div>
      </div>
    </div>
  );
}
