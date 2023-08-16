import { cn } from "@/lib/utils";

interface ITextImage {
  content: JSX.Element;
  image: {
    src: string;
    text: string;
  };
  theme?: string;
  direction?: string;
}

const TextImage = ({ content, image, theme, direction }: ITextImage) => {
  return (
    <div className={cn("section-padding", theme === "dark" && "bg-neutral-800", theme === "light" && "bg-zinc-100")}>
      <div
        className={cn(
          "container flex flex-col gap-12 px-0 md:flex-row md:items-center",
          theme === "dark" && "text-zinc-100",
          direction === "left" && "md:flex-row-reverse",
        )}
      >
        <div className="right flex-1">{content}</div>
        <div className="image flex-1">
          <img src={image.src} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
