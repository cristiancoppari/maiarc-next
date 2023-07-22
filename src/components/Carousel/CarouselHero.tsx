/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { ImageProps } from "@/types/images";

import Image from "next/image";

const CarouselHero = ({ images }: ImageProps) => {
  return (
    <Splide
      className="carousel-hero h-full"
      options={{
        arrows: false,
      }}
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <picture className="relative block h-full">
            <source media="(min-width: 1280px)" srcSet={image.desktop_xl} />
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <Image
              src={image.mobile} // Default image
              alt="Description of the image"
              fill
              className="object-cover"
            />
          </picture>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarouselHero;
