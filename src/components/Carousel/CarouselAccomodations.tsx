import type { ICardAccommodation } from "@/types/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import CardAccommodation from "../Cards/CardAccommodation/CardAccommodation";

interface CarouselBlockAccommodations {
  elements: ICardAccommodation[];
}

function CarouselAccommodations({ elements }: CarouselBlockAccommodations) {
  return (
    <Swiper slidesPerView={2} spaceBetween={50}>
      {elements.map((element, index) => (
        <SwiperSlide key={index}>
          <CardAccommodation {...element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselAccommodations;
