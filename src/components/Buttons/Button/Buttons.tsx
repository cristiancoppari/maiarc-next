import Link from "next/link";

import { Button } from "@/components/ui/button";

export interface Btn {
  text: string;
  classes?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface LinkBtn extends Btn {
  link: string;
}

export const LinkBtn: React.FC<LinkBtn> = ({ link, text, classes }) => {
  return (
    <Button asChild className={`rounded-full px-12 uppercase ${!!classes ? classes : ""}`}>
      <Link href={link}>{text}</Link>
    </Button>
  );
};

export const Btn: React.FC<Btn> = ({ text, classes, type }) => {
  return (
    <Button type={!!type ? type : "button"} className={`rounded-full px-12 uppercase ${!!classes ? classes : ""}`}>
      {text}
    </Button>
  );
};
