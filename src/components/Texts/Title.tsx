import type { ReactNode } from "react";

const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="h2 mx-auto mb-8 uppercase md:w-11/12">{children}</h2>;
};

export default Title;
