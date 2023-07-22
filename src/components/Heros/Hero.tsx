import type { ImageProps } from "@/types/images";

import CarouselHero from "@/components/Carousel/CarouselHero";

const Hero = ({ images }: ImageProps) => {
  return (
    <section style={{ height: "calc(100vh - 200px)" }}>
      <CarouselHero images={images} />
    </section>
  );
};

export default Hero;
