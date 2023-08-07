import type { Service } from "@/types/services";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import ImageTitle from "@/components/Cards/ImageTitle";
import { images } from "@/data/images";
import { fetchServices } from "@/lib/fetchers/fetchers";

interface Params {
  destino: string;
}

interface DestinoPageProps extends Params {
  services: Service[];
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

    const services = services_data.filter((element) => {
      return element.is_clickable;
    });

    return {
      props: {
        destino,
        services,
      },
    };
  } catch (error) {
    throw new Error("Hubo un error");
  }
};

const DestinoPage = ({ destino, services }: DestinoPageProps) => {
  return (
    <PageLayout title={`${destino} - MAIARC`}>
      <Hero images={images} />

      <Section
        title={`Maiarc en ${destino}`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia. Non quaerat quisquam voluptatibus quam perspiciatis molestiae officia dignissimos doloremque!"
      >
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <button key={service.id} onClick={() => console.log(service.name)}>
              <ImageTitle classes="capitalize" title={service.name} image={service.main_image} />
            </button>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default DestinoPage;
