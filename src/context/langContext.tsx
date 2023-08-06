import type { Content } from "@/types/content";

import { type ReactNode, createContext } from "react";
import { useRouter } from "next/router";

import { es } from "@/lang/es";
import { en } from "@/lang/en";

export interface LangContextType {
  locale_file: Content;
  locale: string;
}

export const LangContext = createContext<LangContextType>({} as LangContextType);
export const LangDispatchContext = createContext<React.Dispatch<string>>(() => {});

const LangContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { locale = "es" } = router;

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

  return <LangContext.Provider value={{ locale_file, locale }}>{children}</LangContext.Provider>;
};

export default LangContextProvider;
