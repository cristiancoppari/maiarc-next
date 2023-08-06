import { useContext } from "react";
import { LangContext } from "@/context/langContext";

import PageLayout from "@/components/ui/PageLayout";
import Hero from "@/components/Sections/Heros/Hero";
import TextImage from "@/components/Blocks/TextImage/TextImage";
import CardBig from "@/components/Cards/CardBig/BigImage";
import BgImageText from "@/components/Blocks/BgImageText/BgImageText";

import { images } from "@/data/images";
import maiarc_test from "@/assets/images/maiarc-test.webp";

const QuienesSomosPage = () => {
  const lang_content = useContext(LangContext);
  const section_1 = lang_content.who_we_are.section_1;
  const section_2 = lang_content.who_we_are.section_2;

  const content = (
    <>
      <h2 className="h2 mb-8">{section_1.title}</h2>

      <div className="space-y-2">
        {section_1.texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );

  return (
    <PageLayout title="Quienes somos">
      <Hero images={images} />

      <TextImage content={content} image={{ src: maiarc_test.src, text: "MAIARC" }} theme="dark" />

      <div className="section-padding container flex gap-4">
        <CardBig
          title="Misión"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quo, quibusdam. Quisquam, voluptatum. Quo, quibusdam."
          image={maiarc_test.src}
        />

        <CardBig
          title="Misión"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quo, quibusdam. Quisquam, voluptatum. Quo, quibusdam."
          image={maiarc_test.src}
        />
      </div>

      <BgImageText
        title={section_2.title}
        subtitle={section_2.subtitle}
        bg_image={maiarc_test.src}
        texts={section_2.texts}
      />
    </PageLayout>
  );
};

export default QuienesSomosPage;
