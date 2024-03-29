import type { ReactNode } from "react";

export interface ISection {
  title?: string;
  text?: string;
  children?: ReactNode;
  classes?: string;
  noPadding?: boolean;
  id?: string;
  style?: React.CSSProperties | undefined;
}
