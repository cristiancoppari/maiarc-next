/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { cn } from "@/lib/utils";

const CardImageTitle = ({
  image,
  title,
  subtitle,
  clickable,
  onClick, // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  return (
    <div
      className={cn("shadow-xl", !!clickable && "cursor-pointer")}
      onClick={() => !!clickable && onClick!(title)}
    >
      <img
        src={image}
        alt=""
        className="mx-auto aspect-square w-full object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="p --font-lora">- {title} -</h3>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default CardImageTitle;
