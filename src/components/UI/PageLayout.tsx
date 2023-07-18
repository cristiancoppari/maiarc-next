import Head from "next/head";
import { Montserrat, Lora } from "next/font/google";

import { useContext } from "react";
import { LangContext } from "@/context/langContext";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsappButton from "@/components/Buttons/WhatsappButton/WhatsappButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

function PageLayout({ children, title }: PageLayoutProps) {
  const content = useContext(LangContext);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={`${montserrat.variable} ${lora.variable}`}>
        <Header content={content.header.content} />
        {children}
        <Footer content={content.footer.content} />

        <WhatsappButton />
      </div>
    </>
  );
}

export default PageLayout;
