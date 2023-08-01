import type { Locale } from "@/types/locales";
import type { ICardService } from "@/types/cards";

import { useContext, useState } from "react";
import { LangContext } from "@/context/langContext";

import PageLayout from "@/components/ui/PageLayout";

import Hero from "@/components/Heros/Hero";
import Section from "@/components/Sections/Section";
import CarouselServices from "@/components/Carousel/CarouselServices";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import CarouselAccommodations from "@/components/Carousel/CarouselAccomodations";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Newsletter/Newsletter";
import ConsultationModal from "@/components/Modals/ConsultationModal";

import { images, big_cards_imgs } from "@/data/images";

import villa_img from "@/assets/images/villa-1.png";
import type { Root } from "@/types/api";

const accommodation_cards = [
  {
    id: "1",
    image: villa_img.src,
    name: "Villa 1",
    capacity: 10,
    location: "España",
  },
  {
    id: "2",
    image: villa_img.src,
    name: "Villa 2",
    capacity: 11,
    location: "Ibiza",
  },
  {
    id: "3",
    image: villa_img.src,
    name: "Villa 3",
    capacity: 12,
    location: "Tulum",
  },
  {
    id: "4",
    image: villa_img.src,
    name: "Villa 4",
    capacity: 13,
    location: "Miami",
  },
];

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps = async ({ locale }: { locale: Locale }) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/services/?&locale=${locale}&fields[0]=name&populate[image][fields][0]=url`,
    );

    const data = (await res.json()) as Root;

    const services = data.data.map((element): ICardService => {
      return {
        id: element.id,
        name: element.attributes.name,
        image: `${process.env.STRAPI_URL}${element.attributes.image.data.attributes.url}`,
      };
    });

    return {
      props: {
        cards_services: services,
      },
    };
  } catch (error) {
    throw new Error("Hubo un error");
  }
};

export default function Home({
  cards_services,
}: {
  cards_services: ICardService[];
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [villaId, setVillaId] = useState<string>("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const selectVilla = (id: string) => {
    setVillaId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const content = useContext(LangContext);
  const translated_content = content.home;
  const villa = accommodation_cards.find((card) => card.id === villaId);

  const big_cards = big_cards_imgs.map((card, index) => ({
    ...card,
    ...translated_content.big_gallery.cards[index],
  }));

  return (
    <PageLayout title="MAIARC Concierge">
      <Hero images={images} />

      <Section
        title={content.home.title}
        text={content.home.text}
        classes="container"
      >
        <CarouselServices
          cards={cards_services}
          cta={translated_content.services_gallery.cta}
        />

        <BigGallery cards={big_cards} />
      </Section>

      <Section
        title={translated_content.accommodations.title}
        text={translated_content.accommodations.text}
        classes="bg-zinc-400"
      >
        <CarouselAccommodations
          elements={accommodation_cards}
          cta={translated_content.accommodations.cta}
          openModal={openModal}
          selectVilla={selectVilla}
        />
      </Section>

      <Section
        title={translated_content.instagram_gallery.title}
        text={translated_content.instagram_gallery.text}
        classes="container"
      >
        <InstagramGallery />
      </Section>

      <Newsletter content={translated_content.newsletter} />

      <ConsultationModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        villa={!!villa ? villa : accommodation_cards[0]}
      />
    </PageLayout>
  );
}
