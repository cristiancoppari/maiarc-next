import type { Locale } from "@/types/locales";
import type { Service } from "@/types/cards";
import { fetchServices, fetchPremiumServices } from "@/lib/fetchers/fetchers";

import { useContext, useState } from "react";
import { LangContext } from "@/context/langContext";

import PageLayout from "@/components/ui/PageLayout";

import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import CarouselServices from "@/components/Carousel/CarouselServices";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import CarouselAccommodations from "@/components/Carousel/CarouselAccomodations";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Sections/Newsletter/Newsletter";
import ConsultationModal from "@/components/Modals/ConsultationModal";
import CarouselModal from "@/components/Modals/CarouselModal";

import { images } from "@/data/images";

import villa_img from "@/assets/images/villa-1.png";

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
export const getServerSideProps = async ({ locale }: { locale: Locale }) => {
  const services_data = await fetchServices(locale);
  const premium_services_data = await fetchPremiumServices(locale);

  return {
    props: {
      services: services_data,
      premium_services: premium_services_data,
    },
  };
};

export default function Home({
  services,
  premium_services,
}: {
  services: Service[];
  premium_services: Service[];
}) {
  const [isConsultationModalOpen, setIsConsultationModalOpen] =
    useState<boolean>(false);
  const [isCarouselModalOpen, setIsCarouselModalOpen] =
    useState<boolean>(false);
  const [villaId, setVillaId] = useState<string>("");

  console.log(premium_services);

  const openModal = () => {
    setIsConsultationModalOpen(true);
  };

  const openCarouselModal = () => {
    console.log("clicked");
    setIsCarouselModalOpen(true);
  };

  const selectVilla = (id: string) => {
    setVillaId(id);
  };

  const closeCarouselModal = () => {
    setIsCarouselModalOpen(false);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  const content = useContext(LangContext);
  const translated_content = content.home;
  const villa = accommodation_cards.find((card) => card.id === villaId);

  return (
    <PageLayout title="MAIARC Concierge">
      <Hero images={images} />

      <Section
        title={content.home.title}
        text={content.home.text}
        classes="container"
      >
        <CarouselServices
          cards={services}
          cta={translated_content.services_gallery.cta}
        />

        <BigGallery services={premium_services} />
      </Section>

      <Section
        title={translated_content.accommodations.title}
        text={translated_content.accommodations.text}
        classes="bg-zinc-200"
      >
        <CarouselAccommodations
          elements={accommodation_cards}
          cta={translated_content.accommodations.cta}
          openModal={openModal}
          selectVilla={selectVilla}
          openCarouselModal={openCarouselModal}
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
        isOpen={isConsultationModalOpen}
        closeModal={closeConsultationModal}
        villa={!!villa ? villa : accommodation_cards[0]}
      />

      <CarouselModal
        isOpen={isCarouselModalOpen}
        closeModal={closeCarouselModal}
      />
    </PageLayout>
  );
}
