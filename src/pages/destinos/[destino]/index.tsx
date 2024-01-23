import type { Hotel, PremiumVehicle, Service, Villa, Yatch } from "@/types/services";
import type { DestinoPage as IDestinoPage } from "@/types/pages";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import ImageTitle from "@/components/Cards/ImageTitle";
import { fetchDestinoPage, fetchHotels, fetchPremiumVehicles, fetchVillas, fetchYatchs } from "@/lib/fetchers/fetchers";
import Carousel from "@/components/Carousel/Carousel";
import CardSlide from "@/components/Cards/CardSlides/CardSlide";

type DestinoType = "tulum" | "miami" | "ibiza" | "punta-del-este";

interface Params {
  destino: DestinoType;
}

interface DestinoPageProps extends Params {
  services: Service[];
  villas: Villa[];
  yatchs: Yatch[];
  hotels: Hotel[];
  vehicles: PremiumVehicle[];
  destino_page_data: IDestinoPage;
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
    const villas_data = await fetchVillas();
    const yatchs_data = await fetchYatchs();
    const hotels_data = await fetchHotels();
    const vehicles_data = await fetchPremiumVehicles();
    const destino_page_data = await fetchDestinoPage(locale);

    // Filter the services to show only the clickable ones
    const services = destino_page_data?.services.map((service): Service => {
      return {
        id: service.id,
        name: service.name,
        main_image: service.main_image,
        selector: service.selector,
      };
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
        destino_page_data,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

const destinosMap = {
  tulum: "Tulum",
  miami: "Miami",
  ibiza: "Ibiza",
  "punta-del-este": "Punta del Este",
};

const DestinoPage: React.FC<DestinoPageProps> = ({
  destino,
  services,
  villas,
  yatchs,
  hotels,
  vehicles,
  destino_page_data,
}) => {
  const router = useRouter();
  const service = router.query.service as string;
  const hideCards = router.query.hideCards as string;

  const { locale } = router;

  const c = destino_page_data;

  // Section to show
  const [section, setSection] = useState<string>(service);

  const selectSectionHandler = (section: string) => {
    setSection(section);
  };

  return (
    <PageLayout title={`${destinosMap[destino]} - MAIARC`}>
      <Hero images={c.hero_images[destino]} />

      <Section
        title={`${hideCards ? service : c.title} ${destinosMap[destino]}`}
        text={!hideCards ? c.texts[destino] : ""}
        classes={`${hideCards ? "!pb-0" : ""}`}
      >
        {/* Cards with the services that acts like a filter */}
        <div className={`${hideCards ? "hidden" : "none"}`}>
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link
                href={`#${service.selector}`}
                key={service.id}
                onClick={() => {
                  selectSectionHandler(service.name);
                  console.log(service.name);
                }}
              >
                <ImageTitle classes="capitalize" title={service.name} image={service.main_image} />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {villas.length === 0 && yatchs.length === 0 && hotels.length === 0 && vehicles.length === 0 && (
        <Section
          text={`${locale === "es" ? "No se encontraron resultados" : "No results found"}`}
          classes="container"
        />
      )}

      {(section === "Luxury Accommodations" || section === "Alojamientos de lujo") && (
        <Section classes="container" noPadding id="luxuryAccommodations">
          {/* Services Carousel */}
          <Carousel>
            {villas.map((villa) => (
              <SwiperSlide key={villa.id} className="p-4">
                <CardSlide service={villa} />
              </SwiperSlide>
            ))}
          </Carousel>

          {/* Hotels Carousel */}
          <Carousel>
            {hotels.map((hotel) => (
              <SwiperSlide key={hotel.id} className="p-4">
                <CardSlide service={hotel} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}

      {(section === "Yatchs" || section === "Yates") && (
        <Section classes="container" noPadding id="yatchs">
          {/* Yatch Carousel */}
          <Carousel>
            {yatchs.map((yatch) => (
              <SwiperSlide key={yatch.id} className="p-4">
                <CardSlide service={yatch} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}

      {(section === "Premium Vehicles" || section === "Vehículos Premium") && (
        <Section classes="container" noPadding id="premiumVehicles">
          {/* Premium Vehicles Carousel */}
          <Carousel>
            {vehicles.map((vehicle) => (
              <SwiperSlide key={vehicle.id} className="p-4">
                <CardSlide service={vehicle} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Section>
      )}
    </PageLayout>
  );
};

export default DestinoPage;
