"use client";

/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import type { ImageProps } from "@/types/images";

import Image from "next/image";

import "swiper/css";

const Carousel = ({ images }: ImageProps) => {
  return (
    <Swiper className="h-full">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={image.desktop_xl} />
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <Image
              src={image.mobile} // Default image
              alt="Description of the image"
              layout="fill"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
