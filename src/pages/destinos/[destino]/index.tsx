// import type { GetServerSideProps, GetServerSidePropsContext } from "next";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Heros/Hero";
import Section from "@/components/Sections/Section";

import { images } from "@/data/images";

interface Params {
  destino: string;
}

interface DestinoPageProps extends Params {}

export const getServerSideProps = async ({
  params, // eslint-disable-next-line @typescript-eslint/require-await
}: {
  params: Params;
  // eslint-disable-next-line @typescript-eslint/require-await
}) => {
  // Get the params from the URL
  const { destino } = params;

  if (
    destino !== "tulum" &&
    destino !== "miami" &&
    destino !== "ibiza" &&
    destino !== "punta-del-este"
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: { destino },
  };
};

const DestinoPage = ({ destino }: DestinoPageProps) => {
  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section title={destino} text="Texto del destino"></Section>
    </PageLayout>
  );
};

export default DestinoPage;
