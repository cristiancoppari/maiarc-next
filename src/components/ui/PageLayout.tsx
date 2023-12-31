import Head from "next/head";
import { useContext } from "react";

import { LangContext } from "@/context/langContext";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import WhatsappButton from "@/components/Buttons/WhatsappButton/WhatsappButton";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

function PageLayout({ children, title }: PageLayoutProps) {
  const { locale_file } = useContext(LangContext);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo-black.png" />
        <title>{title}</title>
        <meta name="description" content="MAIARC Concierge." />
      </Head>

      <div>
        <Header content={locale_file.header.content} />
        {children}
        <Footer content={locale_file.footer.content} />

        <WhatsappButton />
      </div>
    </>
  );
}

export default PageLayout;
