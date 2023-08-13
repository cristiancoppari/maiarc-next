import type { SuperYatch } from "@/types/services";
import type { PremiumServicePage } from "@/types/pages";

import { SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import { fetchPremiumServicePage, fetchSuperYatches } from "@/lib/fetchers/fetchers";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import CardSlide from "@/components/Cards/CardSlides/CardSlide";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  try {
    const super_yatches_data = await fetchSuperYatches();
    const super_yatches_page_data = await fetchPremiumServicePage(locale, "super-yatches");

    return {
      props: {
        super_yatches_data,
        super_yatches_page_data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface SuperYatesPageProps {
  super_yatches_data: SuperYatch[];
  super_yatches_page_data: PremiumServicePage;
}

const SuperYatesPage: React.FC<SuperYatesPageProps> = ({ super_yatches_data, super_yatches_page_data }) => {
  const c = super_yatches_page_data;

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
        {/* Super Yatches Carousel */}
        <Carousel>
          {super_yatches_data.map((yatch) => (
            <SwiperSlide key={yatch.id} className="p-4">
              <CardSlide service={yatch} />
            </SwiperSlide>
          ))}
        </Carousel>
      </Section>
    </PageLayout>
  );
};

export default SuperYatesPage;
