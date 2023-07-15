import type { ICardAccommodation } from "@/types/cards";

import Image from "next/image";
import { Button } from "@/components/UI/button";

const CardAccommodation = ({
  image,
  name,
  location,
  capacity,
}: ICardAccommodation) => {
  return (
    <div className="shadow-xl">
      <Image src={image} alt="" width={400} height={300} className="mx-auto" />
      <div className="p-4 text-center">
        <h4 className="p --font-lora">{name}</h4>
        <p>{location}</p>
        <p>{capacity}</p>
        <Button variant="link">Consultar</Button>
      </div>
    </div>
  );
};

export default CardAccommodation;
