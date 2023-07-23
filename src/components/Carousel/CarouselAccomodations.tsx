import type { ICardAccommodation } from "@/types/cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardAccommodation from "../Cards/CardAccommodation/CardAccommodation";
import ButtonBlack from "../Buttons/ButtonBlack/ButtonBlack";

interface CarouselBlockAccommodations {
  elements: ICardAccommodation[];
  cta: {
    label: string;
    href: string;
  };
}

function CarouselAccommodations({
  elements,
  cta,
}: CarouselBlockAccommodations) {
  return (
    <div className="container px-0 md:px-8">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 2,
              perMove: 1,
            },
            1024: {
              perPage: 3,
              perMove: 1,
            },
          },
        }}
        className="with-arrows"
      >
        {elements.map((element, index) => (
          <SplideSlide key={index} className="p-2 py-8">
            <CardAccommodation {...element} />
          </SplideSlide>
        ))}
      </Splide>

      <ButtonBlack link={cta.href} text={cta.label} classes="mt-12" />
    </div>
  );
}

export default CarouselAccommodations;
