"use client";

import { type ReactNode, createContext } from "react";
// import { useRouter } from "next/navigation";

import type { Content } from "@/types/content";

import { es } from "@/lang/es";
import { en } from "@/lang/en";

export const LangContext = createContext<Content>({} as Content);
export const LangDispatchContext = createContext({});

const LangContextProvider = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  const locale = "es";

  let locale_file;

  switch (locale) {
    case "es":
      locale_file = es;
      break;
    case "en":
      locale_file = en;
      break;
    default:
      locale_file = es;
  }

  return (
    <LangContext.Provider value={locale_file as Content}>
      {children}
      {/* <LangDispatchContext.Provider value={{ changeLanguage }}>
      </LangDispatchContext.Provider> */}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
