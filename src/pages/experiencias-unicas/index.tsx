import type { UniqueExperience } from "@/types/services";
import type { PremiumServicePage } from "@/types/pages";

import { SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import { fetchPremiumServicePage, fetchUniqueExperiences } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import CardUniqueExperience from "@/components/Cards/CardSlides/CardUniqueExperience";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const unique_experiences_data = await fetchUniqueExperiences(locale);
    const unique_experiences_page_data = await fetchPremiumServicePage(locale, "unique-experience");

    return {
      props: {
        unique_experiences_data,
        unique_experiences_page_data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface UniqueExperienceProps {
  unique_experiences_data: UniqueExperience[];
  unique_experiences_page_data: PremiumServicePage;
}

const SuperYatesPage: React.FC<UniqueExperienceProps> = ({ unique_experiences_data, unique_experiences_page_data }) => {
  const c = unique_experiences_page_data;

  const content_block_1 = (
    <>
      <h2 className="h2 mb-8">{c.block_1.title}</h2>

      <ReactMarkdown>{c.block_1.text}</ReactMarkdown>
    </>
  );

  const content_block_2 = (
    <>
      <h2 className="h2 mb-8">{c.block_2.title}</h2>

      <ReactMarkdown>{c.block_2.text}</ReactMarkdown>
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
      <Hero images={c.hero.images} />

      <TextImage
        content={content_block_1}
        image={{ src: c.block_1.main_image, text: "MAIARC" }}
        theme={c.block_1.style}
        direction={c.block_1.image}
      />

      <TextImage
        content={content_block_2}
        image={{ src: c.block_2.main_image, text: "MAIARC" }}
        theme={c.block_2.style}
        direction={c.block_2.image}
      />

      <Section classes="container" noPadding>
        {/* Yatch Carousel */}
        <Carousel>
          {unique_experiences_data.map((experience) => (
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
