/* eslint-disable @next/next/no-img-element */
import type { ImageProps } from "@/types/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const CarouselHero = ({ images }: ImageProps) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source media="(min-width: 1280px)" srcSet={image.desktop_xl} />
              <source media="(min-width: 1024px)" srcSet={image.desktop} />
              <source media="(min-width: 768px)" srcSet={image.tablet} />
              <img
                src={image.mobile}
                alt=""
                className="h-full w-full bg-center object-cover"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselHero;
