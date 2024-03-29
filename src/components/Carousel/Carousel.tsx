import React, {PropsWithChildren} from "react";

import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      style={{ paddingTop: "2rem" }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        el: ".custom-pagination",
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="normal-carousel"
    >
      {children}

      <div className="custom-pagination mt-4"></div>
    </Swiper>
  );
};

export default Carousel;
