import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import LangContextProvider from "@/context/langContext";
import ConsultationModal from "@/components/Modals/ConsultationModal";
import { useModalStore } from "@/state/modalStore";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  const { isOpen, closeModal } = useModalStore();

  return (
    <LangContextProvider>
      <main className={`${montserrat.className}`}>
        <Component {...pageProps} />

        <ConsultationModal isOpen={isOpen} closeModal={closeModal} />
      </main>
    </LangContextProvider>
  );
}
