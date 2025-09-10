import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Samanta & Ivan - Invitación de Boda",
  description: "Acompáñanos en nuestro día especial",
  openGraph: {
    title: "Samanta & Ivan - Invitación de Boda",
    description: "Acompáñanos en nuestro día especial",
    images: [
      {
        url: "/images/wedding.png",
        width: 1200,
        height: 630,
        alt: "Samanta & Ivan - Boda",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samanta & Ivan - Invitación de Boda",
    description: "Acompáñanos en nuestro día especial",
    images: ["/images/wedding.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mem0ijn.css" />
        <link rel="preconnect" href="https://use.typekit.net" />
      </head>
      <body className="tk-raleway">{children}</body>
    </html>
  );
}
