"use client";

import type { ICardAccommodation } from "@/types/cards";

import PageLayout from "@/components/UI/PageLayout";
import Hero from "@/components/Heros/Hero";
import TitleSubtitle from "@/components/Sections/TitleSubtitle/TitleSubtitle";
import ServiceGallery from "@/components/Galleries/ServiceGallery/ServiceGallery";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import CarouselAccommodations from "@/components/Carousel/CarouselAccomodations";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";

import img_desktop_xl from "@/assets/images/hero-desktop-xl.jpeg";
import img_desktop from "@/assets/images/hero-desktop.jpeg";
import img_tablet from "@/assets/images/hero-tablet.jpeg";
import img_mobile from "@/assets/images/hero-mobile.jpeg";

import img_card from "@/assets/images/card-image.jpeg";

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
];

const cards = [
  {
    image: img_card.src,
    title: "Villas de Lujo",
  },
  {
    image: img_card.src,
    title: "Yates",
  },
  {
    image: img_card.src,
    title: "Vehículos Premium",
  },
  {
    image: img_card.src,
    title: "Jet Privado / Helicóptero",
  },
  {
    image: img_card.src,
    title: "Producción de eventos",
  },
  {
    image: img_card.src,
    title: "Reservaciones",
  },
];

const big_cards = [
  {
    image: img_card.src,
    title: "Villas de Lujo",
    description:
      "Disfruta de los eventos más exclusivos del calendario VIP mundial. Maiarc se encarga de diseñarte una experiencia única y personalizada.",
    link: "/experiencias-unicas",
  },
  {
    image: img_card.src,
    title: "Yates",
    description:
      "Nuestro broker especializado te brinda acceso a los yates más exclusivos en cualquier parte del mundo. Sumergete en destinos paradisíacos, disfruta de servicios de alta gama y vive una experiencia única.",
    link: "/super-yates",
  },
];

const accommodation_cards: ICardAccommodation[] = [
  {
    image: img_card.src,
    name: "Villa 1",
    capacity: 10,
    location: "España",
  },
  {
    image: img_card.src,
    name: "Villa 2",
    capacity: 11,
    location: "Ibiza",
  },
  {
    image: img_card.src,
    name: "Villa 3",
    capacity: 12,
    location: "Tulum",
  },
  {
    image: img_card.src,
    name: "Villa 4",
    capacity: 13,
    location: "Miami",
  },
];

export default function Home() {
  return (
    <PageLayout title="MAIARC Concierge">
      <Hero images={images} />
      <TitleSubtitle
        title="Donde el lujo y la exclusividad cobran vida. Descubre nuestra gama de servicios exclusivos con un solo clic"
        text="Ponemos a su disposición servicios únicos en Tulum, Ibiza, Miami y los destinos más exclusivos a nivel global. Diseñamos experiencias personalizadas para convertir tus expectativas en vivencias inolvidables."
      >
        <ServiceGallery cards={cards} />
        <BigGallery cards={big_cards} />
      </TitleSubtitle>

      <TitleSubtitle
        title="Tu próximo alojamiento de lujo"
        text="Recorré las propiedades que tenemos a disposición y elegí el lugar perfecto para vos. Contactanos para más información."
        classes="container"
      >
        <CarouselAccommodations elements={accommodation_cards} />
      </TitleSubtitle>

      <TitleSubtitle
        title="Nuestra comunidad"
        text="Se parte! Seguinos en Instagram @maiarc.concierge."
        classes="container"
      >
        <InstagramGallery />
      </TitleSubtitle>
    </PageLayout>
  );
}
