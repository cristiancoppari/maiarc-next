import type { Metadata } from "next";

import "@/styles/globals.css";

import LangContextProvider from "@/context/langContext";

export const metadata: Metadata = {
  title: "MAIARC Concierge",
  description: "Metadescripcion para la home",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LangContextProvider>{children}</LangContextProvider>
      </body>
    </html>
  );
}
