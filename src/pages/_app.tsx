import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";

import "@/styles/globals.css";
import LangContextProvider from "@/context/langContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangContextProvider>
      <main className={`${montserrat.className}`}>
        <Component {...pageProps} />
      </main>
      <Toaster position={"bottom-center"} />
    </LangContextProvider>
  );
}
