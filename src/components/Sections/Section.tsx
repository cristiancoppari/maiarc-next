import type { ISection } from "@/types/sections";

const Section = ({ title, text, children, classes }: ISection) => {
  return (
    <section className={`section-padding ${!!classes ? classes : ""}`}>
      <div className="mb-10">
        <h2 className="h2 mx-auto mb-8 uppercase md:w-11/12">{title}</h2>

        <p className="mx-auto md:w-2/3">{text}</p>
      </div>

      <>{children}</>
    </section>
  );
};

export default Section;
