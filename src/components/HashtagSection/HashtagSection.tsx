"use client";

import { WeddingData } from "@/data/weddingData";
import styles from "./HashtagSection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";

interface HashtagSectionProps {
  data: WeddingData;
}

export default function HashtagSection({ data }: HashtagSectionProps) {
  return (
    <Section className={styles.hashtagSection}>
      <div className={styles.hashtagContainer}>
        <SectionHeading>Compartimos este día junto a vos</SectionHeading>
        <p className={styles.sectionSubtitle}>
          Compartí tus fotos y videos de ese hermoso día
        </p>

        <div className={styles.hashtagContent}>
          <div className={styles.instagramIcon}>📸</div>
          <div className={styles.hashtagDisplay}>{data.hashtag}</div>
          <a
            href={data.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            Ver en Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
