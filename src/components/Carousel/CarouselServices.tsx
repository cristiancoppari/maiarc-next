import type { ICardImageTitle } from "@/types/cards";

import CardImageTitle from "../Cards/CardImageTitle/CardImageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { ButtonBlackLink } from "@/components/Buttons/ButtonBlack/ButtonBlack";

interface ICards {
  cards: ICardImageTitle[];
  cta: string;
}

const CarouselServices = ({ cards, cta }: ICards) => {
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
          640: {
            slidesPerView: 2,
          },
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

      <ButtonBlackLink link="/" text={cta} classes="mt-16" />
    </div>
  );
};

export default CarouselServices;
