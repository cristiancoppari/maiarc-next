import type { ReactNode } from "react";

export interface ITitleSubtitle {
    title: string;
    text: string;
    children?: ReactNode;
    classes?: string;
}
