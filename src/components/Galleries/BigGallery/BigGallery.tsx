import type { ICardBig } from "@/types/cards";

import CardBig from "@/components/Cards/CardBig/CardBig";

interface BigGalleryProps {
  cards: ICardBig[];
}

const BigGallery = ({ cards }: BigGalleryProps) => {
  return (
    <div className="md:w-6/7 sm:w-7/8 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-11/12">
      {cards.map((card, index) => (
        <CardBig
          key={index}
          image={card.image}
          title={card.title}
          link={card.link}
          description={card.description}
          cta_label={card.cta_label}
        />
      ))}
    </div>
  );
};

export default BigGallery;
