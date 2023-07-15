import type { ICardBig } from "@/types/cards";

import CardBig from "@/components/Cards/CardBig/CardBig";

interface BigGalleryProps {
    cards: ICardBig[];
}

const BigGallery = ({ cards }: BigGalleryProps) => {
    return (
        <div className="container grid grid-cols-2 gap-2">
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
