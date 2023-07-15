import Head from "next/head";
import { Montserrat, Lora } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={`${montserrat.variable} ${lora.variable}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
