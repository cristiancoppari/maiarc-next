import type { Hotel, PremiumVehicle, Service, Villa, Yatch } from "@/types/services";

import { useState } from "react";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import ImageTitle from "@/components/Cards/ImageTitle";
import { images } from "@/data/images";
import { fetchHotels, fetchPremiumVehicles, fetchServices, fetchVillas, fetchYatchs } from "@/lib/fetchers/fetchers";
import Carousel from "@/components/Carousel/Carousel";
import CardAccommodation from "@/components/Cards/CardSlides/CardAccommodation";
import CardYatch from "@/components/Cards/CardSlides/CardYatch";
import CardCar from "@/components/Cards/CardSlides/CardCar";
import ConsultationModal, { type FormServiceData } from "@/components/Modals/ConsultationModal";

interface Params {
  destino: string;
}

interface DestinoPageProps extends Params {
  services: Service[];
  villas: Villa[];
  yatchs: Yatch[];
  hotels: Hotel[];
  vehicles: PremiumVehicle[];
}

export const getServerSideProps = async ({ params, locale }: { params: Params; locale: string }) => {
  // Get the params from the URL
  const { destino } = params;

  if (destino !== "tulum" && destino !== "miami" && destino !== "ibiza" && destino !== "punta-del-este") {
    return {
      notFound: true,
    };
  }

  try {
    const services_data = await fetchServices(locale);
    const villas_data = await fetchVillas();
    const yatchs_data = await fetchYatchs();
    const hotels_data = await fetchHotels();
    const vehicles_data = await fetchPremiumVehicles();

    // Filter the services to show only the clickable ones
    const services = services_data.filter((element) => {
      return element.is_clickable;
    });

    // Filter the villas to match the destination
    const villas = villas_data.filter((element) => {
      return element.destination === destino;
    });

    // Filter the yatchs to match the destination
    const yatchs = yatchs_data.filter((element) => {
      return element.destination === destino;
    });

    // Filter the hotels to match the destination
    const hotels = hotels_data.filter((element) => {
      return element.destination === destino;
    });

    // Filter the vehicles to match the destination
    const vehicles = vehicles_data.filter((element) => {
      return element.destination === destino;
    });

    return {
      props: {
        destino,
        services,
        villas,
        yatchs,
        hotels,
        vehicles,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

const DestinoPage: React.FC<DestinoPageProps> = ({ destino, services, villas, yatchs, hotels, vehicles }) => {
  const router = useRouter();
  const service = router.query.service as string;

  // Section to show
  const [section, setSection] = useState<string>(service);

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

  const selectSectionHandler = (section: string) => {
    setSection(section);
  };

  // Service to show in the modal according to the id
  const service_to_show_in_modal = villas.find((service) => service.id === serviceId) as FormServiceData;

  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section
        title={`Maiarc en ${destino}`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia. Non quaerat quisquam voluptatibus quam perspiciatis molestiae officia dignissimos doloremque!"
      >
        {/* Cards with the services that acts like a filter */}
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <button key={service.id} onClick={() => selectSectionHandler(service.name)}>
              <ImageTitle classes="capitalize" title={service.name} image={service.main_image} />
            </button>
          ))}
        </div>
      </Section>

      {(section === "Luxury Accommodations" || section === "Alojamientos de lujo") && (
        <Section classes="container" noPadding>
          {/* Services Carousel */}
          <Carousel>
            {villas.map((villa) => (
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

          {/* Hotels Carousel */}
          <Carousel>
            {hotels.map((hotel) => (
              <SwiperSlide key={hotel.id} className="p-4">
                <CardAccommodation
                  card={hotel}
                  handlers={{
                    selectService: selectServiceHandler,
                    openModal: openConsultationModal,
                  }}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}

      {(section === "Yatchs" || section === "Yates") && (
        <Section classes="container" noPadding>
          {/* Yatch Carousel */}
          <Carousel>
            {yatchs.map((yatch) => (
              <SwiperSlide key={yatch.id} className="p-4">
                <CardYatch
                  card={yatch}
                  handlers={{
                    selectService: selectServiceHandler,
                    openModal: openConsultationModal,
                  }}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}

      {(section === "Premium Vehicles" || section === "Vehiculos Premium") && (
        <Section classes="container" noPadding>
          {/* Premium Vehicles Carousel */}
          <Carousel>
            {vehicles.map((vehicle) => (
              <SwiperSlide key={vehicle.id} className="p-4">
                <CardCar
                  card={vehicle}
                  handlers={{
                    selectService: selectServiceHandler,
                    openModal: openConsultationModal,
                  }}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        closeModal={closeConsultationModal}
        service={service_to_show_in_modal ?? ""}
      />
    </PageLayout>
  );
};

export default DestinoPage;
