import { useContext } from "react";

import { LangContext } from "@/context/langContext";
import PageLayout from "@/components/ui/PageLayout";

const PoliticasDePrivacidadPage = () => {
  const content = useContext(LangContext);
  const locale_content = content.locale_file;

  return (
    <PageLayout title="MAIARC Concierge">
      <section className="container mt-44">
        <h2 className="h2">{locale_content.privacyPolicy.title}</h2>
        <p className="mt-4">{locale_content.privacyPolicy.lastUpdated}</p>

        {locale_content.privacyPolicy.sections.map((section) => {
          return (
            <article key={section.title} className="mt-4">
              <h3 className="h4">{section.title}</h3>
              <p>{section.content}</p>
            </article>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default PoliticasDePrivacidadPage;
