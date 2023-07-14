import Head from "next/head";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header/Header";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--alertas-font-primary",
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

            <div className={`${montserrat.variable}`}>
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default PageLayout;
