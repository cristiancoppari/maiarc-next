import type { ButtonBlackProps, ButtonBlackLinkProps } from "@/types/buttons";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export const ButtonBlackLink = ({
  link,
  text,
  classes,
}: ButtonBlackLinkProps) => {
  return (
    <Button
      asChild
      className={`rounded-full px-12 uppercase ${!!classes ? classes : ""}`}
    >
      <Link href={link}>{text}</Link>
    </Button>
  );
};

export const ButtonBlack = ({ text, classes, type }: ButtonBlackProps) => {
  return (
    <Button
      type={!!type ? type : "button"}
      className={`rounded-full px-12 uppercase ${!!classes ? classes : ""}`}
    >
      {text}
    </Button>
  );
};
