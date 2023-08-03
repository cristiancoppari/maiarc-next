import type { Root } from "@/types/api";
import type { ICardService } from "@/types/cards";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Heros/Hero";
import Section from "@/components/Sections/Section";

import { images } from "@/data/images";
import CarouselServices from "@/components/Carousel/CarouselServices";

interface Params {
  destino: string;
}

interface DestinoPageProps extends Params {
  cards_services: ICardService[];
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
      `${process.env.API_URL}/services/?&locale=${locale}&fields[0]=name&populate[image][fields][0]=url`,
    );

    const data = (await res.json()) as Root;

    const services = data.data.map((element): ICardService => {
      return {
        id: element.id,
        name: element.attributes.name,
        image: element.attributes.image.data.attributes.url,
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
  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section
        title={`Maiarc en ${destino}`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia. Non quaerat quisquam voluptatibus quam perspiciatis molestiae officia dignissimos doloremque!"
      >
        <CarouselServices cards={cards_services} />
      </Section>
    </PageLayout>
  );
};

export default DestinoPage;
