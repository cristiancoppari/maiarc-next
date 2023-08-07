import type { ISection } from "@/types/sections";

import { cn } from "@/lib/utils";

const Section = ({ title, text, children, classes, noPadding }: ISection) => {
  return (
    <section className={cn(!noPadding && `section-padding`, `text-center ${!!classes ? classes : ""}`)}>
      <div className="mb-10">
        {!!title && <h2 className="h2 mx-auto mb-8 uppercase md:w-11/12">{title}</h2>}

        {!!text && <p className="p mx-auto md:w-2/3">{text}</p>}
      </div>

      <>{children}</>
    </section>
  );
};

export default Section;
