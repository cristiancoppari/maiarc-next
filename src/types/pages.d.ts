import { Service } from "./services";

export interface AboutUsPage {
  hero: string[];
  section_1: {
    title: string;
    text: string;
    style: string;
    image: string;
    main_image: string;
  };
  block_1: {
    title: string;
    text: string;
    main_image: string;
  };
  block_2: {
    title: string;
    text: string;
    main_image: string;
  };
  block_with_background: {
    title_1: string;
    title_2: string;
    text: string;
    background_image: string;
  };
}

export interface HomePage {
  hero: {
    images: string[];
  };
  services_block: {
    title: string;
    text: string;
    services: Service[];
  };
  premium_services_block: {
    title: string;
    text: string;
    premium_services: {
      title: string;
      image: string;
      description: string;
      link?: string;
      cta_label?: string;
    }[];
  };
  accommodations_block: {
    title: string;
    text: string;
  };
  community_block: {
    title: string;
    text: string;
  };
  newsletter_block: {
    title: string;
    text: string;
  };
}
