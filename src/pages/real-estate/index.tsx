import type { RealEstateItem } from "@/types/services";

import { SwiperSlide } from "swiper/react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import maiarc_test from "@/assets/images/maiarc-test.webp";
import { fetchRealEstates } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
// Hacer administrable
import { images } from "@/data/images";
import CardUniqueExperience from "@/components/Cards/CardSlides/CardUniqueExperience";

export const getServerSideProps = async () => {
  try {
    const real_estate_data = await fetchRealEstates();

    return {
      props: {
        real_estate_data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface RealEstatePageProps {
  real_estate_data: RealEstateItem[];
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({ real_estate_data: real_estates }) => {
  const content = (
    <>
      <h2 className="h2 mb-8">Titulo</h2>

      <div className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil necessitatibus nisi rem beatae incidunt
          assumenda non atque pariatur architecto ratione nulla quod magni praesentium, voluptates voluptatum sequi
          officiis iste. Temporibus sit fugit non quisquam unde illo quis suscipit cum.
        </p>
      </div>
    </>
  );

  const selectServiceHandler = () => {
    console.log("selectServiceHandler");
  };

  const openConsultationModal = () => {
    console.log("openConsultationModal");
  };

  return (
    <PageLayout title="super-yates">
      <Hero images={images} />

      <TextImage content={content} image={{ src: maiarc_test.src, text: "MAIARC" }} />

      <TextImage content={content} image={{ src: maiarc_test.src, text: "MAIARC" }} theme="light" direction="left" />

      <Section classes="container" noPadding>
        {/* Yatch Carousel */}
        <Carousel>
          {real_estates.map((real_estate) => (
            <SwiperSlide key={real_estate.id} className="p-4">
              <CardUniqueExperience
                card={real_estate}
                handlers={{
                  selectService: selectServiceHandler,
                  openModal: openConsultationModal,
                }}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </Section>
    </PageLayout>
  );
};

export default RealEstatePage;
