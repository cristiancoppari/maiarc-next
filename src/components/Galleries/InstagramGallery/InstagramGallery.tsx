import Image from "next/image";

import img_card from "@/assets/images/card-image.jpeg";

const instagram_images = [img_card, img_card, img_card, img_card];

const InstagramGallery = () => {
  return (
    <div className="flex justify-center gap-12">
      {instagram_images.map((image, index) => (
        <Image key={index} src={image} alt={"Maiarc Concierce"} width={200} />
      ))}
    </div>
  );
};

export default InstagramGallery;
