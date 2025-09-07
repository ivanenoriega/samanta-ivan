"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./ImportantData.module.scss";
import { SectionHeading } from "../SectionHeading";

interface ActionItem {
  text: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

interface ImportantDataProps {
  icon: string;
  title: string;
  description: string;
  action?: ActionItem;
}

export default function ImportantData({
  icon,
  title,
  description,
  action,
}: ImportantDataProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.importantDataItem}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <div className={styles.headerContent}>
          <div className={styles.dataIcon}>{icon}</div>
          <SectionHeading variant="h3">{title}</SectionHeading>
        </div>
        <div
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ""}`}
        >
          ▼
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown-content"
            className={styles.dropdownContent}
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              opacity: { duration: 0.2 },
              height: { duration: 0.3 },
              y: { duration: 0.2 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.dropdownContentInner}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {description}
              </motion.p>
              {action && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                >
                  {action.onClick ? (
                    <button
                      onClick={action.onClick}
                      className={styles.actionButton}
                    >
                      {action.text}
                    </button>
                  ) : (
                    <a
                      href={action.href}
                      target={action.target || "_blank"}
                      rel={action.rel || "noopener noreferrer"}
                      className={styles.actionButton}
                    >
                      {action.text}
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
