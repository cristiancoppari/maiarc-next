import type { UniqueExperience } from "@/types/services";

import { SwiperSlide } from "swiper/react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import maiarc_test from "@/assets/images/maiarc-test.webp";
import { fetchUniqueExperiences } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
// Hacer administrable
import { images } from "@/data/images";
import CardUniqueExperience from "@/components/Cards/CardSlides/CardUniqueExperience";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const unique_experiences_data = await fetchUniqueExperiences(locale);

    return {
      props: {
        unique_experiences_data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface UniqueExperienceProps {
  unique_experiences_data: UniqueExperience[];
}

const SuperYatesPage: React.FC<UniqueExperienceProps> = ({ unique_experiences_data: unique_experiences }) => {
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
          {unique_experiences.map((experience) => (
            <SwiperSlide key={experience.id} className="p-4">
              <CardUniqueExperience
                card={experience}
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

export default SuperYatesPage;
