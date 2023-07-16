import { type ReactNode, createContext } from "react";
import { useRouter } from "next/router";

interface Root {
  nav_links_left: NavLinksLeft[];
  nav_links_right: NavLinksRight[];
  home: Home;
}

interface NavLinksLeft {
  label: string;
  href: string;
}

interface Home {
  title: string;
  text: string;
  services_gallery: ServiceGallery[];
}

interface NavLinksRight {
  label: string;
  href: string;
}

interface ServiceGallery {
  title: string;
}

import { es } from "@/lang/es";
import { en } from "@/lang/en";

export const LangContext = createContext<Root>({} as Root);
export const LangDispatchContext = createContext({});

const LangContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { locale } = router;

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
    <LangContext.Provider value={locale_file as Root}>
      {children}
      {/* <LangDispatchContext.Provider value={{ changeLanguage }}>
      </LangDispatchContext.Provider> */}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
