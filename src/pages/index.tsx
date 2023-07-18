import { useContext } from "react";
import { LangContext } from "@/context/langContext";

import PageLayout from "@/components/UI/PageLayout";
import Hero from "@/components/Heros/Hero";
import TitleSubtitle from "@/components/Sections/TitleSubtitle/TitleSubtitle";
import ServiceGallery from "@/components/Galleries/ServiceGallery/ServiceGallery";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import CarouselAccommodations from "@/components/Carousel/CarouselAccomodations";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Newsletter/Newsletter";

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

const cards_imgs = [
  {
    image: img_card.src,
  },
  {
    image: img_card.src,
  },
  {
    image: img_card.src,
  },
  {
    image: img_card.src,
  },
  {
    image: img_card.src,
  },
  {
    image: img_card.src,
  },
];

const big_cards_imgs = [
  {
    image: img_card.src,
    link: "/experiencias-unicas",
  },
  {
    image: img_card.src,
    link: "/super-yates",
  },
];

const accommodation_cards = [
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
      <TitleSubtitle
        title={content.home.title}
        text={content.home.text}
        classes="container"
      >
        <ServiceGallery
          cards={cards}
          cta={translated_content.services_gallery.cta}
        />
        <BigGallery cards={big_cards} />
      </TitleSubtitle>

      <TitleSubtitle
        title={translated_content.accommodations.title}
        text={translated_content.accommodations.text}
        classes="container"
      >
        <CarouselAccommodations elements={accommodation_cards} />
      </TitleSubtitle>

      <TitleSubtitle
        title={translated_content.instagram_gallery.title}
        text={translated_content.instagram_gallery.text}
        classes="container"
      >
        <InstagramGallery />
      </TitleSubtitle>

      <Newsletter content={translated_content.newsletter} />
    </PageLayout>
  );
}
