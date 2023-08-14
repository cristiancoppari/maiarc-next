import type { ReactNode } from "react";

import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Swiper
      style={{ paddingTop: "2rem" }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        el: ".custom-pagination",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {children}

      <div className="custom-pagination mt-4"></div>
    </Swiper>
  );
};

export default Carousel;
