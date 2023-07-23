"use client";

import { useState } from "react";

import Hero from "@/components/Heros/Hero";
import Section from "@/components/Sections/Section";
import CarouselServices from "@/components/Carousel/CarouselServices";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import CarouselAccommodations from "@/components/Carousel/CarouselAccomodations";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Newsletter/Newsletter";
import ConsultationModal from "@/components/Modals/ConsultationModal";

import img_desktop_xl from "@/assets/images/hero-home.jpeg";
import img_desktop from "@/assets/images/hero-home.jpeg";
import img_tablet from "@/assets/images/hero-home.jpeg";
import img_mobile from "@/assets/images/hero-home.jpeg";

import service_villas_img from "@/assets/images/servicios-villas-de-lujo.png";
import servive_wellness_img from "@/assets/images/servicios-bienestar.png";
import service_chefs_img from "@/assets/images/servicios-chef.png";
import service_unique_experiencies_img from "@/assets/images/servicios-experiencias-unicas.png";
import service_jets_img from "@/assets/images/servicios-jet-privados.png";
import service_vip_tables_img from "@/assets/images/servicios-mesas-vip.png";
import service_event_production_img from "@/assets/images/servicios-produccion-de-eventos.png";
import service_reservations_img from "@/assets/images/servicios-reservas.png";
import service_security_img from "@/assets/images/servicios-seguridad.png";
import service_tours_img from "@/assets/images/servicios-tours.png";
import service_transfers_img from "@/assets/images/servicios-traslados.png";
import service_premium_vehicles_img from "@/assets/images/servicios-vehiculos-premium.png";
import service_yachts_img from "@/assets/images/servicios-yates.png";
import service_super_yatchs_img from "@/assets/images/servicios-super-yates.png";

import villa_img from "@/assets/images/villa-1.png";

const images = [
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
];

const cards_imgs = [
  {
    image: service_villas_img.src,
  },
  {
    image: service_yachts_img.src,
  },
  {
    image: service_premium_vehicles_img.src,
  },
  {
    image: service_jets_img.src,
  },
  {
    image: service_event_production_img.src,
  },
  {
    image: servive_wellness_img.src,
  },
  {
    image: service_chefs_img.src,
  },
  {
    image: service_unique_experiencies_img.src,
  },
  {
    image: service_vip_tables_img.src,
  },
  {
    image: service_reservations_img.src,
  },
  {
    image: service_security_img.src,
  },
  {
    image: service_tours_img.src,
  },
  {
    image: service_transfers_img.src,
  },
];

const big_cards_imgs = [
  {
    image: service_unique_experiencies_img.src,
    link: "/experiencias-unicas",
  },
  {
    image: service_super_yatchs_img.src,
    link: "/super-yates",
  },
];

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
    <>
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
    </>
  );
}
