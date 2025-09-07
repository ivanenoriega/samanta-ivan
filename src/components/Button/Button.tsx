"use client";

import { ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  // Button-specific props
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  // Link-specific props
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  onClick,
  type = "button",
  href,
  target,
  rel,
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={buttonClasses}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}
