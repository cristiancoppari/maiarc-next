import type { PremiumServicePage } from "@/types/pages";
import type { RealEstateItem } from "@/types/services";

import { SwiperSlide } from "swiper/react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import { fetchPremiumServicePage, fetchRealEstates } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import CardUniqueExperience from "@/components/Cards/CardSlides/CardUniqueExperience";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const real_estate_data = await fetchRealEstates();
    const real_estate_page_data = await fetchPremiumServicePage(locale, "real-estate");

    return {
      props: {
        real_estate_data,
        real_estate_page_data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface RealEstatePageProps {
  real_estate_data: RealEstateItem[];
  real_estate_page_data: PremiumServicePage;
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({ real_estate_data, real_estate_page_data }) => {
  const c = real_estate_page_data;

  const content_block_1 = (
    <>
      <h2 className="h2 mb-8">{c.block_1.title}</h2>

      <div className="space-y-2">
        <p>{c.block_1.text}</p>
      </div>
    </>
  );

  const content_block_2 = (
    <>
      <h2 className="h2 mb-8">{c.block_2.title}</h2>

      <div className="space-y-2">
        <p>{c.block_2.text}</p>
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
          {real_estate_data.map((real_estate) => (
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
