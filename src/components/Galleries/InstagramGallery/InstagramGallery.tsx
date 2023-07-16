import Image from "next/image";

import img_card from "@/assets/images/card-image.jpeg";

const instagram_images = [img_card, img_card, img_card, img_card];

const InstagramGallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {instagram_images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={"Maiarc Concierce"}
          width={100}
          className="w-full sm:w-1/3 md:w-1/5"
        />
      ))}
    </div>
  );
};

export default InstagramGallery;
