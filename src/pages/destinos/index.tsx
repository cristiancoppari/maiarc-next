import type { Destination } from "@/types/services";
import type { DestinosPage } from "@/types/pages";

import Link from "next/link";
import { useRouter } from "next/router";

import Section from "@/components/Sections/Section";
import ImageTitle from "@/components/Cards/ImageTitle";
import PageLayout from "@/components/ui/PageLayout";
import { fetchDestinations, fetchDestinosPage } from "@/lib/fetchers/fetchers";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  // Fetch data from Strapi API
  const destinations_data = await fetchDestinations();
  const destinos_page_data = await fetchDestinosPage(locale);

  return {
    props: {
      destinations: destinations_data,
      destinos_page_data,
    },
  };
};

interface DestinationsPageProps {
  destinations: Destination[];
  destinos_page_data: DestinosPage;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ destinations, destinos_page_data }) => {
  const router = useRouter();
  const service = router.query.service as string;

  const c = destinos_page_data;

  return (
    <PageLayout title="MAIARC Destinations">
      <Section title={c.block_1.title} text={c.block_1.text} classes={"mt-24"}>
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <Link href={`/destinos/${destination.slug}/${service ? "?service=" + service : ""}`} key={destination.id}>
              <ImageTitle classes="capitalize" title={destination.name} image={destination.main_image} />
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default DestinationsPage;
