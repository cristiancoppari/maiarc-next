import type { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className="p mx-auto md:w-2/3">{children}</p>;
};

export default Paragraph;
