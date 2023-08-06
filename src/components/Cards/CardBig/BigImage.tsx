import { LinkBtn } from "@/components/Buttons/Button/Buttons";

interface BigImage {
  title: string;
  image: string;
  description: string;
  link: string;
  cta_label: string;
}

const BigImage: React.FC<BigImage> = ({ title, image, description, link, cta_label }) => {
  return (
    <div className="flex flex-col shadow-xl">
      <img src={image} alt="" className="mx-auto aspect-square w-full" />
      <div className="relative flex h-full flex-col items-center justify-between p-4 md:p-8">
        <div>
          <h3 className="h3 --font-lora mb-4 font-medium">- {title} -</h3>
          <p className="p mb-8">{description}</p>
        </div>

        {!!cta_label && !!link && <LinkBtn link={link} text={cta_label} />}
      </div>
    </div>
  );
};

export default BigImage;
