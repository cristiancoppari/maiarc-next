import { type ReactNode, type ChangeEvent, createContext } from "react";
import { useRouter } from "next/router";

export const LangContext = createContext({});
export const LangDispatchContext = createContext({});

const LangContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    void router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <LangContext.Provider value={{ locale }}>
      <LangDispatchContext.Provider value={{ changeLanguage }}>
        {children}
      </LangDispatchContext.Provider>
    </LangContext.Provider>
  );
};

export default LangContextProvider;
