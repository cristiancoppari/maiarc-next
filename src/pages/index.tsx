import type { Locale } from "@/types/locales";
import type { Service, Villa } from "@/types/services";
import type { FormServiceData } from "@/components/Modals/ConsultationModal";

import { useContext, useState } from "react";
import { SwiperSlide } from "swiper/react";

import { fetchServices, fetchPremiumServices, fetchVillas } from "@/lib/fetchers/fetchers";
import { LangContext } from "@/context/langContext";
import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import Carousel from "@/components/Carousel/Carousel";
import ImageTitle from "@/components/Cards/ImageTitle";
import { LinkBtn } from "@/components/Buttons/Button/Buttons";
import BigGallery from "@/components/Galleries/BigGallery/BigGallery";
import InstagramGallery from "@/components/Galleries/InstagramGallery/InstagramGallery";
import Newsletter from "@/components/Sections/Newsletter/Newsletter";
import CardAccommodation from "@/components/Cards/CardAccommodation/CardAccommodation";
import ConsultationModal from "@/components/Modals/ConsultationModal";
// TODO: hacer que el hero sea administrable
import { images } from "@/data/images";

export const getServerSideProps = async ({ locale }: { locale: Locale }) => {
  // Fetch data from Strapi API
  const services_data = await fetchServices(locale);
  const premium_services_data = await fetchPremiumServices(locale);
  const villas_data = await fetchVillas();

  return {
    props: {
      services: services_data,
      premium_services: premium_services_data,
      villas_data: villas_data,
    },
  };
};

interface HomeProps {
  services: Service[];
  premium_services: Service[];
  villas_data: Villa[];
}

const Home: React.FC<HomeProps> = ({ services, premium_services, villas_data }) => {
  // Locale file
  const { locale_file } = useContext(LangContext);

  // Translated content from locale files
  const translated_content = locale_file.home;

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
      <Hero images={images} />

      <Section title={locale_file.home.title} text={locale_file.home.text} classes="container">
        {/* Services Carousel */}
        <Carousel>
          {services.map((service) => (
            <SwiperSlide key={service.id} className="p-4">
              <ImageTitle image={service.main_image} title={service.name} subtitle={service.subtitle} />
            </SwiperSlide>
          ))}
        </Carousel>

        <LinkBtn link="/contacto" text={"Mas"} classes="my-16" />

        {/* Premium Services */}
        <BigGallery services={premium_services} />
      </Section>

      <Section
        title={translated_content.accommodations.title}
        text={translated_content.accommodations.text}
        classes="bg-zinc-200"
      >
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
      </Section>

      <Section
        title={translated_content.instagram_gallery.title}
        text={translated_content.instagram_gallery.text}
        classes="container"
      >
        <InstagramGallery />
      </Section>

      <Newsletter content={translated_content.newsletter} />

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
