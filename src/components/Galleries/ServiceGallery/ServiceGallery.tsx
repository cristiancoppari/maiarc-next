import type { ICardImageTitle } from "@/types/cards";

import Link from "next/link";

import { Button } from "@/components/UI/button";
import CardImageTitle from "../../Cards/CardImageTitle/CardImageTitle";

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

            <Button asChild className="mt-6 rounded-full px-8 uppercase">
                <Link href="/">Contacto</Link>
            </Button>
        </div>
    );
};

export default ServiceGallery;
