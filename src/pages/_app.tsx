import { Montserrat, Lora } from "next/font/google";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LangContextProvider from "@/context/langContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangContextProvider>
      <main className={`${montserrat.variable} ${lora.variable}`}>
        <Component {...pageProps} />
      </main>
    </LangContextProvider>
  );
}
