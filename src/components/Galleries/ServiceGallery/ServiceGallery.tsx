import type { ICardImageTitle } from "@/types/cards";

import CardImageTitle from "../../Cards/CardImageTitle/CardImageTitle";
import ButtonBlack from "@/components/Buttons/ButtonBlack/ButtonBlack";

interface ICards {
    cards: ICardImageTitle[];
}

const ServiceGallery = ({ cards }: ICards) => {
    return (
        <div className="container pb-20">
            <div className="grid grid-cols-3 gap-2">
                {cards.map((card, index) => (
                    <CardImageTitle
                        key={index}
                        image={card.image}
                        title={card.title}
                    />
                ))}
            </div>

            <ButtonBlack link="/" text="Contacto" classes="mt-12" />
        </div>
    );
};

export default ServiceGallery;
