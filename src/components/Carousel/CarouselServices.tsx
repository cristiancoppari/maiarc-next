import type { ICardImageTitle } from "@/types/cards";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import CardImageTitle from "../Cards/CardImageTitle/CardImageTitle";
import ButtonBlack from "@/components/Buttons/ButtonBlack/ButtonBlack";

interface ICards {
  cards: ICardImageTitle[];
  cta: string;
}

const CarouselServices = ({ cards, cta }: ICards) => {
  return (
    <div className="pb-20">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          mediaQuery: "min",
          breakpoints: {
            768: {
              perPage: 2,
              perMove: 2,
            },
            1024: {
              perPage: 3,
              perMove: 3,
            },
          },
        }}
        className="with-arrows"
      >
        {cards.map((card) => (
          <SplideSlide key={card.title} className="p-2 py-8">
            <CardImageTitle image={card.image} title={card.title} />
          </SplideSlide>
        ))}
      </Splide>

      <ButtonBlack link="/" text={cta} classes="mt-16" />
    </div>
  );
};

export default CarouselServices;
