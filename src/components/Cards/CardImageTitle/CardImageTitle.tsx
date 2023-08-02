import type { ICardImageTitle } from "@/types/cards";

const CardImageTitle = ({ image, title }: ICardImageTitle) => {
  return (
    <div className="shadow-xl">
      <img
        src={image}
        alt=""
        className="mx-auto aspect-square w-full object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="p --font-lora">- {title} -</h3>
      </div>
    </div>
  );
};

export default CardImageTitle;
