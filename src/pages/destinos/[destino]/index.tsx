/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Root } from "@/types/api";

import { useState } from "react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";

import { images } from "@/data/images";
import CarouselServices from "@/components/Carousel/CarouselServices";

interface Params {
  destino: string;
}

interface DestinoPageProps extends Params {
  cards_services: any[];
}

export const getServerSideProps = async ({
  params,
  locale,
}: {
  params: Params;
  locale: string;
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

  try {
    const res = await fetch(
      `${process.env.API_URL}/services/?&locale=${locale}&fields[0]=name&populate[image][fields][0]=url&fields[2]=clickable`,
    );

    const data = (await res.json()) as Root;

    // Get the clickables services
    const data_filtered = data.data.filter((element) => {
      return element.attributes.clickable;
    });

    const services = data_filtered.map((element): any => {
      return {
        id: element.id,
        name: element.attributes.name,
        image: element.attributes.image.data.attributes.url,
        clickable: element.attributes.clickable,
      };
    });

    return {
      props: {
        destino,
        cards_services: services,
      },
    };
  } catch (error) {
    throw new Error("Hubo un error");
  }
};

const DestinoPage = ({ destino, cards_services }: DestinoPageProps) => {
  const [service, setService] = useState<string>("");

  const setServiceHandler = (service: string) => {
    setService(service);
  };

  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section
        title={`Maiarc en ${destino}`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia. Non quaerat quisquam voluptatibus quam perspiciatis molestiae officia dignissimos doloremque!"
      >
        <CarouselServices
          cards={cards_services}
          clickHandler={setServiceHandler}
        />

        {/* TODO: esto esta hardcodeado */}
        {!!service && (
          <Section title={service}>
            <CarouselServices
              cards={cards_services}
              clickHandler={setServiceHandler}
            />
          </Section>
        )}
      </Section>
    </PageLayout>
  );
};

export default DestinoPage;
