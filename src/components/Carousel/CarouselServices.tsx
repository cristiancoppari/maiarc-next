/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { ButtonBlackLink } from "@/components/Buttons/Button/Buttons";

import CardImageTitle from "../Cards/ImageTitle";

interface CarouselServicesProps {
  cards: any[];
  cta?: string;
  clickHandler?: (title: string) => void;
}

const CarouselServices = ({ cards, cta, clickHandler }: CarouselServicesProps) => {
  return (
    <div className="container pb-20">
      <Swiper
        style={{ paddingTop: "2rem" }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="p-4">
            <CardImageTitle image={card.image} title={card.name} clickable={card.clickable} onClick={clickHandler} />
          </SwiperSlide>
        ))}
        <div className="custom-pagination mt-4"></div>
      </Swiper>

      {!!cta && <ButtonBlackLink link="/contacto" text={cta} classes="mt-16" />}
    </div>
  );
};

export default CarouselServices;
