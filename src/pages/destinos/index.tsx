import type { Destination } from "@/types/services";

import Link from "next/link";
import { useRouter } from "next/router";

import Section from "@/components/Sections/Section";
import ImageTitle from "@/components/Cards/ImageTitle";
import PageLayout from "@/components/ui/PageLayout";
import { fetchDestinations } from "@/lib/fetchers/fetchers";

export const getServerSideProps = async () => {
  // Fetch data from Strapi API
  const destinations_data = await fetchDestinations();

  return {
    props: {
      destinations: destinations_data,
    },
  };
};

const DestinationsPage: React.FC<{ destinations: Destination[] }> = ({ destinations }) => {
  const router = useRouter();
  const service = router.query.service as string;

  return (
    <PageLayout title="MAIARC Destinations">
      <Section title="Elegí tu destino" text="Encontra la vida de placer y lujo en nuestros destinos:">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <Link href={`/destinos/${destination.slug}/?service=${service}`} key={destination.id}>
              <ImageTitle classes="capitalize" title={destination.name} image={destination.main_image} />
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default DestinationsPage;
