import type { AboutUsPage } from "@/types/pages";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import BigImage from "@/components/Cards/CardBig/BigImage";
import BgImageText from "@/components/Blocks/BgImageText/BgImageText";
import { fetchAboutUsPage } from "@/lib/fetchers/fetchers";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  // Fetch data from Strapi API
  const about_us_page_data = await fetchAboutUsPage(locale);

  return {
    props: {
      about_us_page: about_us_page_data,
    },
  };
};

interface QuienesSomosProps {
  about_us_page: AboutUsPage;
}

const QuienesSomosPage: React.FC<QuienesSomosProps> = ({ about_us_page }) => {
  const c = about_us_page;

  const content = (
    <>
      <h2 className="h2 mb-8">{c.section_1.title}</h2>

      <p>{c.section_1.text}</p>
    </>
  );

  return (
    <PageLayout title="Quienes somos">
      <Hero images={c.images} />

      <TextImage content={content} image={{ src: c.section_1.main_image, text: "MAIARC" }} theme={c.section_1.style} />

      <div className="section-padding container flex gap-4">
        <BigImage title={c.block_1.title} description={c.block_1.text} image={c.block_1.main_image} />

        <BigImage title={c.block_2.title} description={c.block_2.text} image={c.block_2.main_image} />
      </div>

      <BgImageText
        title={c.block_with_background.title_1}
        subtitle={c.block_with_background.title_2}
        bg_image={c.block_with_background.background_image}
        text={c.block_with_background.text}
      />
    </PageLayout>
  );
};

export default QuienesSomosPage;
