import type { ImageProps } from "@/types/images";

import Carousel from "@/components/Carousel/Carousel";

const Hero = ({ images }: ImageProps) => {
  return (
    <section style={{ height: "calc(100vh - 200px)" }}>
      <Carousel images={images} />
    </section>
  );
};

export default Hero;
