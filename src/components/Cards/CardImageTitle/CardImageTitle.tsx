import type { ICardImageTitle } from "@/types/cards";

import Image from "next/image";

const CardImageTitle = ({ image, title }: ICardImageTitle) => {
  return (
    <div className="shadow-xl">
      <Image
        src={image}
        alt=""
        width={400}
        height={300}
        className="mx-auto aspect-square w-full"
      />
      <div className="p-4 text-center">
        <h3 className="p --font-lora">- {title} -</h3>
      </div>
    </div>
  );
};

export default CardImageTitle;
