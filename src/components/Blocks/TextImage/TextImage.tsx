import type { ITextImage } from "@/types/TextImage";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TextImage = ({ content, image, theme }: ITextImage) => {
  return (
    <div className={cn("section-padding", theme === "dark" && "bg-gray-800")}>
      <div
        className={cn(
          "container flex flex-col gap-12 px-0 md:flex-row md:items-center",
          theme === "dark" && "text-zinc-100",
        )}
      >
        <div className="right flex-1">{content}</div>
        <div className="image flex-1">
          <Image src={image.src} alt={image.text} width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
