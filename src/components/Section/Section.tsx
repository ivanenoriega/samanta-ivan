"use client";

import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  as?: "section" | "footer";
}

export default function Section({
  children,
  className = "",
  id,
  fullHeight = true,
  as = "section",
}: SectionProps) {
  const sectionClasses = [
    styles.section,
    fullHeight ? styles.fullHeight : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = as;

  return (
    <Component className={sectionClasses} id={id}>
      <div className={styles.sectionContent}>{children}</div>
    </Component>
  );
}
