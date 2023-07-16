import type { ICardBig } from "@/types/cards";

import CardBig from "@/components/Cards/CardBig/CardBig";

interface BigGalleryProps {
  cards: ICardBig[];
}

const BigGallery = ({ cards }: BigGalleryProps) => {
  return (
    <div className="md:w-6/7 sm:w-7/8 container grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-3/4 xl:w-2/3">
      {cards.map((card, index) => (
        <CardBig
          key={index}
          image={card.image}
          title={card.title}
          link={card.link}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default BigGallery;
