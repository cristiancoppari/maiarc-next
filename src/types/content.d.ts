export interface Content {
  header: Header;
  home: Home;
  footer: Footer;
}

export interface Section {
  title: string;
  text: string;
}

export interface Header {
  content: {
    nav_links_left: NavLinks[];
    nav_links_right: NavLinks[];
  };
}

export interface Footer {
  content: string;
}

export interface NavLinks {
  label: string;
  href: string;
}

export interface Home extends Section {
  services_gallery: ServicesGallery;
  big_gallery: BigGallery;
  accommodations: Accomodations;
  instagram_gallery: InstagramGallery;
  newsletter: Newsletter;
}

export interface InstagramGallery extends Section {
  images: string[];
}

export interface Accomodations {
  title: string;
  text: string;
  // cards: AccomodationCard[];
}

export interface ServiceCard {
  title: string;
}

export interface ServicesGallery {
  cards: ServiceCard[];
  cta: string;
}

export interface BigGallery {
  cards: BigGalleryCard[];
  cta: string;
}

export interface BigGalleryCard {
  title: string;
  description: string;
  image: string;
  link: string;
  cta_label: string;
}

export interface Newsletter extends Section {
  cta: string;
}
