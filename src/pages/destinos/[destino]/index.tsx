import type { GetStaticPaths, GetStaticProps } from "next";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Heros/Hero";
import Section from "@/components/Sections/Section";

import { images } from "@/data/images";

interface DestinoPageProps {
  destino: string;
}

const DestinoPage = ({ destino }: DestinoPageProps) => {
  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section title={destino} text="Texto del destino"></Section>
    </PageLayout>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  // List of supported locales
  const locales: string[] = ["en", "es"];

  // List of available destinos in each locale
  const available_destinations: Record<string, string[]> = {
    en: ["miami", "tulum", "punta-del-este", "ibiza"], // Add other destinos available in the "en" locale
    es: ["miami", "tulum", "punta-del-este", "ibiza"], // Add other destinos available in the "es" locale
  };

  const paths = locales.flatMap((locale: string) => {
    return available_destinations[locale].map((destino: string) => ({
      params: { destino },
      locale,
    }));
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DestinoPageProps> = async ({
  params,
  // eslint-disable-next-line @typescript-eslint/require-await
}) => {
  // Check if 'params' is defined
  if (!params || typeof params.destino !== "string") {
    // Handle the case when 'params' is undefined or 'destino' is missing
    // For example, you can redirect to a 404 page or show an error message
    // You can also return an empty 'props' object or any default data as needed
    return {
      notFound: true,
    };
  }

  // Fetch data for the valid 'destino'
  const { destino } = params;

  return {
    props: { destino },
  };
};

export default DestinoPage;
