import type { Locale } from "@/types/locales";
import type { Service, Villa } from "@/types/services";
import type { FormServiceData } from "@/components/Modals/ConsultationModal";
import type { HomePage } from "@/types/pages";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";

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
import CardAccommodation from "@/components/Cards/CardSlides/CardAccommodation";
import ConsultationModal from "@/components/Modals/ConsultationModal";

export const getServerSideProps = async ({ locale }: { locale: Locale }) => {
  // Fetch data from Strapi API
  const villas_data = await fetchVillas();
  const home_page_data = await fetchHomePage(locale);

  return {
    props: {
      // services: services_data,
      villas_data: villas_data,
      home_page_data,
    },
  };
};

interface HomeProps {
  services: Service[];
  premium_services: Service[];
  villas_data: Villa[];
  home_page_data: HomePage;
}

const Home: React.FC<HomeProps> = ({ villas_data, home_page_data }) => {
  const c = home_page_data;

  // Store the service id to open the consultation modal and show the correct data
  const [serviceId, setServiceId] = useState<string | number>("");

  // Consultation Modal
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);

  // Handlers
  const openConsultationModal = () => setIsConsultationModalOpen(true);
  const closeConsultationModal = () => setIsConsultationModalOpen(false);

  const selectServiceHandler = (id: string | number) => {
    setServiceId(id);
  };

  // Service to show in the modal according to the id
  const service_to_show_in_modal = villas_data.find((service) => service.id === serviceId) as FormServiceData;

  return (
    <PageLayout title="MAIARC Concierge">
      <Hero images={c.hero.images} />

      <Section title={c.services_block.title} text={c.services_block.text} classes="container">
        {/* Clickable Services */}
        <h2 className="h2 mx-auto mb-6 uppercase md:w-11/12">{c.services_block.title}</h2>

        {!!c.services_block.text && <p className="p mb-8">{c.services_block.text}</p>}

        <div className="container mb-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {c.services_block.services.map((service) => {
            if (service.is_clickable) {
              return (
                <Link key={service.id} href={`/destinos/?service=${service.name}`}>
                  <ImageTitle image={service.main_image} title={service.name} subtitle={service.subtitle} />
                </Link>
              );
            }
          })}
        </div>

        <h2 className="h2 mx-auto mb-4 mt-24 uppercase md:w-11/12">Tambien contamos con:</h2>
        {/* Services Carousel */}
        <Carousel>
          {c.services_block.services.map((service) => {
            if (!service.is_clickable) {
              return (
                <SwiperSlide key={service.id} className="p-4">
                  <ImageTitle image={service.main_image} title={service.name} subtitle={service.subtitle} />
                </SwiperSlide>
              );
            }
          })}
        </Carousel>

        <LinkBtn link="/contacto" text={"Mas"} classes="my-16" />

        {/* Premium Services */}
        <BigGallery services={c.premium_services_block.premium_services} />
      </Section>

      <Section title={c.accommodations_block.title} text={c.accommodations_block.text} classes="bg-zinc-200">
        <div className="container">
          {/* Services Carousel */}
          <Carousel>
            {villas_data.map((villa) => (
              <SwiperSlide key={villa.id} className="p-4">
                <CardAccommodation
                  card={villa}
                  handlers={{
                    selectService: selectServiceHandler,
                    openModal: openConsultationModal,
                  }}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </Section>

      <Section title={c.community_block.title} text={c.community_block.text} classes="container">
        <InstagramGallery />
      </Section>

      <Newsletter title={c.newsletter_block.title} text={c.newsletter_block.text} />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        closeModal={closeConsultationModal}
        service={service_to_show_in_modal ?? ""}
      />

      {/* <CarouselModal isOpen={isCarouselModalOpen} closeModal={closeCarouselModal} /> */}
    </PageLayout>
  );
};

export default Home;
