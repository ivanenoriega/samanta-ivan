import React from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h2 className={`${styles.sectionTitle} ${className || ""}`}>{children}</h2>
  );
};
