"use client";

import { useState } from "react";
import Image from "next/image";
import { WeddingData } from "@/data/weddingData";
import {
  generateCalendarEvent,
  generateGoogleCalendarUrl,
  generateOutlookCalendarUrl,
  generateYahooCalendarUrl,
  downloadICSFile,
} from "@/utils/calendarUtils";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./CalendarButton.module.scss";

interface CalendarButtonProps {
  data: WeddingData;
}

export default function CalendarButton({ data }: CalendarButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCalendarAction = (action: string) => {
    const event = generateCalendarEvent(data);

    switch (action) {
      case "google":
        window.open(generateGoogleCalendarUrl(event), "_blank");
        break;
      case "outlook":
        window.open(generateOutlookCalendarUrl(event), "_blank");
        break;
      case "yahoo":
        window.open(generateYahooCalendarUrl(event), "_blank");
        break;
      case "apple":
        // For Apple Calendar, download ICS file instead of opening URL
        downloadICSFile(event);
        break;
    }

    setIsOpen(false);
  };

  return (
    <>
      <Button variant="primary" size="large" onClick={() => setIsOpen(true)}>
        Agendar
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Agregar al Calendario"
      >
        <div className={styles.calendarOptions}>
          <p className={styles.description}>
            Elige tu aplicación de calendario preferida para agregar el evento
            de la boda:
          </p>

          <div className={styles.optionsGrid}>
            <Button
              variant="secondary"
              size="large"
              onClick={() => handleCalendarAction("google")}
              className={styles.calendarOption}
            >
              <Image
                src="/images/icons/calendar/google-calendar.png"
                alt="Google Calendar"
                width={32}
                height={32}
                className={styles.optionIcon}
              />
              Google Calendar
            </Button>

            <Button
              variant="secondary"
              size="large"
              onClick={() => handleCalendarAction("outlook")}
              className={styles.calendarOption}
            >
              <Image
                src="/images/icons/calendar/outlook.png"
                alt="Outlook"
                width={32}
                height={32}
                className={styles.optionIcon}
              />
              Outlook
            </Button>

            <Button
              variant="secondary"
              size="large"
              onClick={() => handleCalendarAction("yahoo")}
              className={styles.calendarOption}
            >
              <Image
                src="/images/icons/calendar/yahoo.png"
                alt="Yahoo Calendar"
                width={32}
                height={32}
                className={styles.optionIcon}
              />
              Yahoo Calendar
            </Button>

            <Button
              variant="secondary"
              size="large"
              onClick={() => handleCalendarAction("apple")}
              className={styles.calendarOption}
            >
              <Image
                src="/images/icons/calendar/apple-logo.png"
                alt="Apple Calendar"
                width={32}
                height={32}
                className={styles.optionIcon}
              />
              Apple Calendar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
