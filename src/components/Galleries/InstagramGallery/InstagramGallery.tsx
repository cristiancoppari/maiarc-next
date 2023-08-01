import instagram_1 from "@/assets/images/instagram-1.png";
import instagram_2 from "@/assets/images/instagram-2.png";
import instagram_3 from "@/assets/images/instagram-3.png";
import instagram_4 from "@/assets/images/instagram-4.png";

const instagram_images = [
  instagram_1.src,
  instagram_2.src,
  instagram_3.src,
  instagram_4.src,
];

const InstagramGallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {instagram_images.map((image, index) => (
        <img
          className="w-full sm:w-1/3 md:w-1/5"
          src={image}
          alt={"Maiarc Concierce"}
          key={index}
        />
      ))}
    </div>
  );
};

export default InstagramGallery;
