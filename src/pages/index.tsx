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

import { images, cards_imgs, big_cards_imgs } from "@/data/images";

import villa_img from "@/assets/images/villa-1.png";

const accommodation_cards = [
  {
    image: villa_img.src,
    name: "Villa 1",
    capacity: 10,
    location: "España",
  },
  {
    image: villa_img.src,
    name: "Villa 2",
    capacity: 11,
    location: "Ibiza",
  },
  {
    image: villa_img.src,
    name: "Villa 3",
    capacity: 12,
    location: "Tulum",
  },
  {
    image: villa_img.src,
    name: "Villa 4",
    capacity: 13,
    location: "Miami",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const content = useContext(LangContext);
  const translated_content = content.home;

  const cards = cards_imgs.map((card, index) => ({
    ...card,
    ...translated_content.services_gallery.cards[index],
  }));

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
          cards={cards}
          cta={translated_content.services_gallery.cta}
        />

        <BigGallery cards={big_cards} />
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

      <ConsultationModal isOpen={isModalOpen} closeModal={closeModal} />
    </PageLayout>
  );
}
