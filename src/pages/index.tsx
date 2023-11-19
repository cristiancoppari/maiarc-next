/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Locale } from "@/types/locales";
import type { Service, Villa } from "@/types/services";
import type { HomePage } from "@/types/pages";

import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useContext } from "react";

// import ReactMarkdown from "react-markdown";
import { LangContext } from "@/context/langContext";
import { fetchVillas, fetchHomePage } from "@/lib/fetchers/fetchers";
import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import ImageTitle from "@/components/Cards/ImageTitle";
import { LinkBtn } from "@/components/Buttons/Button/Buttons";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Sections/Newsletter/Newsletter";
import CardSlide from "@/components/Cards/CardSlides/CardSlide";

export const getServerSideProps = async ({ locale }: { locale: Locale }) => {
  // Fetch data from Strapi API
  const villas_data = await fetchVillas();
  const home_page_data = await fetchHomePage(locale);
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`;
  const data = await fetch(url);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const feed = await data.json();

  return {
    props: {
      villas_data: villas_data,
      home_page_data,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      feed,
    },
  };
};

interface HomeProps {
  services: Service[];
  premium_services: Service[];
  villas_data: Villa[];
  home_page_data: HomePage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  feed: any;
}

const Home: React.FC<HomeProps> = ({ villas_data, home_page_data, feed }) => {
  const c = home_page_data;
  const content = useContext(LangContext);
  const locale_content = content.locale_file;

  return (
    <PageLayout title="MAIARC Concierge">
      <Hero images={c.hero.images} />

      <Section title={c.services_block.title} text={c.services_block.text} classes="container">
        <div className="container mb-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {c.clickable_services.map((service) => {
            return (
              <Link key={service.id} href={`/destinos/?service=${service.name}`}>
                <ImageTitle image={service.main_image} title={service.name} subtitle={service.subtitle} />
              </Link>
            );
          })}
        </div>

        {/* Services Carousel */}
        <Carousel>
          {c.services_block.services.map((service) => {
            return (
              <SwiperSlide key={service.id} className="px-4 pb-12">
                <ImageTitle image={service.main_image} title={service.name} subtitle={service.subtitle} />
              </SwiperSlide>
            );
          })}
        </Carousel>

        <LinkBtn link="/contacto" text={locale_content.ctas.more} classes="my-16" />

        {/* Premium Services */}
        <BigGallery services={c.premium_services_block.premium_services} cta={locale_content.ctas.more} />
      </Section>

      <Section title={c.accommodations_block.title} text={c.accommodations_block.text} classes="bg-zinc-200">
        <div className="container p-0">
          {/* Services Carousel */}
          <Carousel>
            {villas_data.map((villa) => (
              <SwiperSlide key={villa.id} className="p-4">
                <CardSlide service={villa} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </Section>

      {/*<Section title={c.community_block.title} text={c.community_block.text} classes="container">*/}
      {/*  <InstagramGallery feed={feed} />*/}
      {/*</Section>*/}

      <Newsletter title={c.newsletter_block.title} text={c.newsletter_block.text} />
    </PageLayout>
  );
};

export default Home;
