import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LangContextProvider from "@/context/langContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangContextProvider>
      <Component {...pageProps} />
    </LangContextProvider>
  );
}
