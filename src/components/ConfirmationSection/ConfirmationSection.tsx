"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import { WeddingData } from "@/data/weddingData";
import styles from "./ConfirmationSection.module.scss";

interface ConfirmationSectionProps {
  data: WeddingData;
}

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  asistencia: boolean;
}

export default function ConfirmationSection({}: ConfirmationSectionProps) {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    asistencia: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "info">(
    "success"
  );
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  // Extract URL parameters and preload form fields
  useEffect(() => {
    const name = searchParams.get("name");
    const lastName = searchParams.get("last_name");

    if (name || lastName) {
      setFormData((prev) => ({
        ...prev,
        nombre: name || prev.nombre,
        apellido: lastName || prev.apellido,
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/confirm-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageType("success");
        setSubmitMessage("¡Gracias por confirmar tu asistencia!");
        setIsSuccessfullySubmitted(true);
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          asistencia: true,
        });
        setIsModalOpen(false);
      } else {
        setMessageType("error");
        setSubmitMessage(
          "Hubo un error al enviar la confirmación. Por favor, intenta de nuevo."
        );
      }
    } catch {
      setMessageType("error");
      setSubmitMessage("Error de conexión. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecline = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Use URL parameters if available, otherwise use form data or fallback values
      const name =
        searchParams.get("name") || formData.nombre || "No confirmado";
      const lastName =
        searchParams.get("last_name") || formData.apellido || "No confirmado";

      const declineData = {
        nombre: name,
        apellido: lastName,
        email: "no-confirmado@example.com",
        telefono: "No proporcionado",
        asistencia: false,
      };

      const response = await fetch("/api/confirm-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(declineData),
      });

      if (response.ok) {
        setMessageType("info");
        setSubmitMessage(
          "Entendemos que no puedes asistir. ¡Gracias por informarnos!"
        );
        setIsSuccessfullySubmitted(true);
      } else {
        setMessageType("error");
        setSubmitMessage(
          "Hubo un error al enviar la respuesta. Por favor, intenta de nuevo."
        );
      }
    } catch {
      setMessageType("error");
      setSubmitMessage("Error de conexión. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="confirmation">
      <div className={styles.confirmationSection}>
        <SectionHeading>Confirmación de Asistencia</SectionHeading>
        <p className={styles.description}>
          Por favor, confirma tu asistencia a nuestra boda para poder organizar
          todo perfectamente.
        </p>

        <div className={styles.buttonContainer}>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="large"
            className={styles.confirmButton}
            disabled={isSuccessfullySubmitted}
          >
            Confirmar asistencia
          </Button>
          <Button
            onClick={handleDecline}
            variant="secondary"
            size="large"
            className={styles.declineButton}
            disabled={isSuccessfullySubmitted}
          >
            No puedo asistir
          </Button>
        </div>

        {submitMessage && (
          <div
            className={`${styles.message} ${styles.showMessage} ${
              styles[`${messageType}Message`]
            }`}
          >
            {submitMessage}
          </div>
        )}
      </div>

      {/* Full-screen spinner overlay */}
      {isSubmitting && (
        <div className={styles.spinnerOverlay}>
          <div className={styles.spinner}>
            <div className={styles.spinnerCircle}></div>
            <p className={styles.spinnerText}>Enviando confirmación...</p>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmar Asistencia"
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="apellido">Apellido *</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formActions}>
            <Button
              type="button"
              onClick={() => setIsModalOpen(false)}
              variant="secondary"
              size="medium"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="medium"
            >
              {isSubmitting ? "Enviando..." : "Confirmar"}
            </Button>
          </div>
        </form>
      </Modal>
    </Section>
  );
}
