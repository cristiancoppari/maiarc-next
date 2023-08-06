import { cn } from "@/lib/utils";

interface ImageTitleProps {
  image: string;
  title: string;
  subtitle?: string;
}

const ImageTitle: React.FC<ImageTitleProps> = ({ image, title, subtitle }) => {
  return (
    <div className={cn("shadow-xl")}>
      <img src={image} alt="" className="mx-auto aspect-square w-full object-cover" />

      <div className="p-4 text-center">
        <h3 className="p --font-lora">- {title} -</h3>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ImageTitle;
