interface ICardService {
  id: number;
  name: string;
  image: string;
  clickable?: boolean | null;
}

export interface ICardImageTitle {
  title: string;
  image: string;
  href?: string;
  subtitle?: string;
  clickable?: boolean | null;
  onClick?: (title: string) => void;
}

export interface ICardBig {
  title: string;
  image: string;
  description: string;
  link?: string;
  cta_label?: string;
}

export interface IAccommodation {
  id: string;
  image: string;
  location: string;
  name: string;
  capacity: number;
}

export interface ICardAccommodation {
  card: IAccommodation;
  openModal?: () => void;
  selectVilla?: (id: string) => void;
  openCarouselModal?: () => void;
}
