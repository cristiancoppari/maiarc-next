export interface ICardImageTitle {
  title: string;
  image: string;
}

export interface ICardBig {
  title: string;
  image: string;
  description: string;
  link: string;
  cta_label: string;
}

export interface ICardAccommodation {
  image: string;
  location: string;
  name: string;
  capacity: number;
  openModal?: () => void;
}
