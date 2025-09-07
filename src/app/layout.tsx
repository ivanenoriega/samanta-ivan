import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Samanta & Ivan - Wedding Invitation",
  description: "Join us for our special day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mem0ijn.css" />
        <link rel="preconnect" href="https://use.typekit.net" />
      </head>
      <body className="tk-raleway">{children}</body>
    </html>
  );
}
