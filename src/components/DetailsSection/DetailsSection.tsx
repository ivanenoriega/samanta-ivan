"use client";

import { useState } from "react";
import { WeddingData } from "@/data/weddingData";
import styles from "./DetailsSection.module.scss";
import { SectionHeading } from "../SectionHeading";
import Section from "../Section";
import ImportantData from "../ImportantData";
import BankingInfoModal from "../BankingInfoModal";

interface DetailsSectionProps {
  data: WeddingData;
}

export default function DetailsSection({ data }: DetailsSectionProps) {
  const [isBankingModalOpen, setIsBankingModalOpen] = useState(false);

  const handleOpenBankingModal = () => {
    setIsBankingModalOpen(true);
  };

  const handleCloseBankingModal = () => {
    setIsBankingModalOpen(false);
  };

  return (
    <Section className={styles.detailsSection}>
      <div className={styles.detailsContainer}>
        <SectionHeading>Datos importantes</SectionHeading>

        <div className={styles.importantDataList}>
          <ImportantData
            icon="👗"
            title="Dress code: Cóctel"
            description="Les pedimos con cariño reservar el blanco y los tonos claros para los novios. Para inspirarse con ideas de vestimenta, les compartimos este link."
            action={{
              text: "Ver ejemplos en Pinterest",
              href: "https://ar.pinterest.com/samiid30/dresscode-c%C3%B3ctel/",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          />

          <ImportantData
            icon="🎁"
            title="Regalos"
            description="Si deseas regalarnos algo más que tu hermosa presencia, puedes hacerlo a través de transferencia bancaria o en efectivo el día del evento. Tu presencia es el mejor regalo."
            action={{
              text: "Ver datos bancarios",
              onClick: handleOpenBankingModal,
            }}
          />

          <ImportantData
            icon="👶"
            title="Evento para adultos"
            description="Con el fin de que todos podamos disfrutar al máximo de la celebración, este evento está diseñado exclusivamente para adultos. Agradecemos tu comprensión y esperamos que puedas organizarte para asistir sin niños."
          />

          <ImportantData
            icon="🎫"
            title="Invitaciones individuales"
            description="Las invitaciones del evento son individuales, por lo que cada invitación cuenta para una sola persona. Si tienes acompañante, por favor asegúrate de que también tenga su propia invitación."
          />

          <ImportantData
            icon="📸"
            title="Recuerdos"
            description="¡Queremos ver todas las fotos y videos de nuestra celebración! Pueden subir sus fotos con el hashtag #samantaeivan en Instagram para que todos podamos revivir los mejores momentos del evento."
            action={{
              text: "Ver fotos en Instagram",
              href: data.instagramUrl,
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          />

          <ImportantData
            icon="✅"
            title="Confirmar asistencia"
            description="Es muy importante que confirmes tu asistencia al evento. Más abajo encontrarás el formulario para confirmar tu presencia. Tu respuesta nos ayuda a organizar mejor la celebración y asegurar que todo esté perfecto para recibirte."
            action={{
              text: "Confirmar asistencia",
              href: "#confirmation",
              target: "_self",
            }}
          />
        </div>
      </div>

      <BankingInfoModal
        isOpen={isBankingModalOpen}
        onClose={handleCloseBankingModal}
        bankingInfo={data.bankingInfo}
      />
    </Section>
  );
}
