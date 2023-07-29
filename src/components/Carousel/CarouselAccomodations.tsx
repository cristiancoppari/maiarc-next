import type { IAccommodation } from "@/types/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import CardAccommodation from "../Cards/CardAccommodation/CardAccommodation";
import { ButtonBlackLink } from "../Buttons/ButtonBlack/ButtonBlack";

interface CarouselBlockAccommodations {
  elements: IAccommodation[];
  cta: {
    label: string;
    href: string;
  };
  openModal: () => void;
  selectVilla: (id: string) => void;
}

function CarouselAccommodations({
  elements,
  cta,
  openModal,
  selectVilla,
}: CarouselBlockAccommodations) {
  return (
    <div className="container px-0 md:px-8">
      <Swiper slidesPerView={2} spaceBetween={50}>
        {elements.map((element, index) => (
          <SwiperSlide key={index}>
            <CardAccommodation
              card={element}
              openModal={openModal}
              selectVilla={selectVilla}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonBlackLink link={cta.href} text={cta.label} classes="mt-12" />
    </div>
  );
}

export default CarouselAccommodations;
