import type { ICardBig } from "@/types/cards";

import Link from "next/link";
import { Button } from "@/components/UI/button";

import Image from "next/image";

const CardBig = ({ title, image, description, link }: ICardBig) => {
    return (
        <div className="flex flex-col shadow-xl">
            <Image
                src={image}
                alt=""
                width={400}
                height={300}
                className="mx-auto w-full"
            />
            <div className="relative flex h-full flex-col items-center justify-between p-4">
                <div>
                    <h3 className="h3 --font-lora mb-4 font-medium">
                        - {title} -
                    </h3>
                    <p className="p mb-8">{description}</p>
                </div>

                <Button asChild>
                    <Link href={link}>Ver más</Link>
                </Button>
            </div>
        </div>
    );
};

export default CardBig;
