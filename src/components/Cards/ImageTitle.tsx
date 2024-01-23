import React from "react";
import { cn } from "@/lib/utils";

interface ImageTitleProps {
  image: string;
  title: string;
  subtitle?: string;
  classes?: string;
}

const ImageTitle: React.FC<ImageTitleProps> = ({ image, title, subtitle, classes }) => {
  return (
    <div className={cn("shadow-xl", classes)}>
      <img src={image} alt="" className="mx-auto aspect-square w-full object-cover" />

      <div className="p-4 text-center">
        <h3 className="--font-lora font-medium">- {title} -</h3>
        {!!subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ImageTitle;
