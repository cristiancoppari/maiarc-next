import type { PremiumServicePage } from "@/types/pages";
import type { RealEstateItem } from "@/types/services";

import { SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import { fetchPremiumServicePage, fetchRealEstates } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import CardSlide from "@/components/Cards/CardSlides/CardSlide";
import { LinkBtn } from "@/components/Buttons/Button/Buttons";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const real_estate_data = await fetchRealEstates();
    const real_estate_page_data = await fetchPremiumServicePage(locale, "real-estate");

    return {
      props: {
        real_estate_data,
        real_estate_page_data,
        locale,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface RealEstatePageProps {
  real_estate_data: RealEstateItem[];
  real_estate_page_data: PremiumServicePage;
  locale: string;
}

const RealEstatePage: React.FC<RealEstatePageProps> = ({ real_estate_data, real_estate_page_data, locale }) => {
  const c = real_estate_page_data;

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

  return (
    <PageLayout title="MAIARC Vip Concierge">
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
              <CardSlide service={real_estate} />
            </SwiperSlide>
          ))}
        </Carousel>

        <LinkBtn link={"/contacto"} text={locale === "es" ? "Contactanos" : "Contact us"} classes="mt-12" />
      </Section>
    </PageLayout>
  );
};

export default RealEstatePage;
