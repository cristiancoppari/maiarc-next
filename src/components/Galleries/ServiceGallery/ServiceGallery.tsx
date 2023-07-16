import type { ICardImageTitle } from "@/types/cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import CardImageTitle from "../../Cards/CardImageTitle/CardImageTitle";
import ButtonBlack from "@/components/Buttons/ButtonBlack/ButtonBlack";

interface ICards {
  cards: ICardImageTitle[];
}

const ServiceGallery = ({ cards }: ICards) => {
  return (
    <div className="container pb-20">
      <Swiper
        style={{ paddingTop: "2rem" }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} className="p-4">
            <CardImageTitle image={card.image} title={card.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonBlack link="/" text="Contacto" classes="mt-16" />
    </div>
  );
};

export default ServiceGallery;
