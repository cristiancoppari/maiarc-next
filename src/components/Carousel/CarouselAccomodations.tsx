/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import CardAccommodation from "../Cards/CardAccommodation/CardAccommodation";
import { ButtonBlackLink } from "../Buttons/ButtonBlack/ButtonBlack";
import { Autoplay, Pagination } from "swiper/modules";

interface CarouselBlockAccommodations {
  elements: any[];
  cta: {
    label: string;
    href: string;
  };
  openModal: () => void;
  selectVilla: (id: string) => void;
  openCarouselModal: () => void;
}

function CarouselAccommodations({
  elements,
  cta,
  openModal,
  selectVilla,
  openCarouselModal,
}: CarouselBlockAccommodations) {
  return (
    <div className="container px-0 md:px-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          el: ".custom-pagination",
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
        {elements.map((element, index) => (
          <SwiperSlide key={index}>
            <CardAccommodation
              card={element}
              openModal={openModal}
              selectVilla={selectVilla}
              openCarouselModal={openCarouselModal}
            />
          </SwiperSlide>
        ))}

        <div className="custom-pagination mt-8"></div>
      </Swiper>

      <ButtonBlackLink link={cta.href} text={cta.label} classes="mt-12" />
    </div>
  );
}

export default CarouselAccommodations;
