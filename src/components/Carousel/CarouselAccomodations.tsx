import type { ICardAccommodation } from "@/types/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CardAccommodation from "../Cards/CardAccommodation/CardAccommodation";

interface CarouselBlockAccommodations {
  elements: ICardAccommodation[];
}

function CarouselAccommodations({ elements }: CarouselBlockAccommodations) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {elements.map((element, index) => (
        <SwiperSlide key={index} className="p-4">
          <CardAccommodation {...element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselAccommodations;
