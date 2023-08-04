import type { Daum2 } from "./api";

interface Service {
  id: number | string;
  name: string;
  image: string;
  subtitle?: string;
  description?: string | null;
  images?: Daum2[] | null;
}

export interface Accommodation {
  id: string;
  name: string;
  location: string;
  capacity: number;
  image: string;
}

export interface SuperYatch {
  id: string;
  name: string;
  location: string;
  capacity: number;
  image: string;
}

export interface UniqueExperience {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface Card {
  cta?: {
    label: string;
    link: string;
  };
  clickable?: boolean | null;
  clickHandler: (param: string) => void; // to receive many functions that return a void
}

export interface CardService extends Card, Service {}
