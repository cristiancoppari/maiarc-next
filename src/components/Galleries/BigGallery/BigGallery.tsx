import type { Service } from "@/types/services";

import BigImage from "@/components/Cards/CardBig/BigImage";

interface BigGalleryProps {
  services: Service[];
  cta: string;
}

const BigGallery: React.FC<BigGalleryProps> = ({ services, cta }) => {
  const [service_1, service_2] = services;
  return (
    <div className="md:w-6/7 sm:w-7/8 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-11/12">
      <BigImage
        image={service_1.main_image}
        title={service_1.name}
        link={"/experiencias-unicas"}
        description={service_1.description ?? ""}
        cta_label={cta}
      />

      <BigImage
        image={service_2.main_image}
        title={service_2.name}
        link={"/super-yates"}
        description={service_2.description ?? ""}
        cta_label={cta}
      />
    </div>
  );
};

export default BigGallery;
