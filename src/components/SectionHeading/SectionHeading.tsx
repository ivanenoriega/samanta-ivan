import React from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
  variant = "h2",
}) => {
  const HeadingTag = variant === "h3" ? "h3" : "h2";
  const styleClass =
    variant === "h3" ? styles.sectionTitleH3 : styles.sectionTitle;

  return (
    <HeadingTag className={`${styleClass} ${className || ""}`}>
      {children}
    </HeadingTag>
  );
};
