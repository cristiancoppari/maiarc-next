import type { ContactoPage as IContactPage } from "@/types/pages";

import PageLayout from "@/components/ui/PageLayout";
// import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import ContactForm from "@/components/Forms/ContactForm";
import { fetchContactPage } from "@/lib/fetchers/fetchers";

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  // Fetch data from Strapi API
  const contact_page_data = await fetchContactPage(locale);

  return {
    props: {
      contact_page_data,
    },
  };
};

interface ContactoPageProps {
  contact_page_data: IContactPage;
}

const ContactoPage: React.FC<ContactoPageProps> = ({ contact_page_data }) => {
  const c = contact_page_data;

  return (
    <PageLayout title={"Contacto"}>
      {/* <Hero images={c.hero.images} /> */}

      <Section title={c.block_1.title} text={c.block_1.text} classes="mt-28">
        <ContactForm />
      </Section>
    </PageLayout>
  );
};

export default ContactoPage;
