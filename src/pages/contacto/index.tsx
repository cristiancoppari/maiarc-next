import { useContext } from "react";
import { LangContext } from "@/context/langContext";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import Section from "@/components/Sections/Section";
import ContactForm from "@/components/Forms/ContactForm";

import { images } from "@/data/images";

const ContactoPage = () => {
  const content = useContext(LangContext);
  const c = content.contact;

  return (
    <PageLayout title={c.title}>
      <Hero images={images} />

      <Section title={c.title} text={c.text}>
        <ContactForm />
      </Section>
    </PageLayout>
  );
};

export default ContactoPage;
