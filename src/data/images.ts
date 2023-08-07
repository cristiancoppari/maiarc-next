import img_desktop_xl from "@/assets/images/hero-home.jpeg";
import img_desktop from "@/assets/images/hero-home.jpeg";
import img_tablet from "@/assets/images/hero-home.jpeg";
import img_mobile from "@/assets/images/hero-home.jpeg";
import service_villas_img from "@/assets/images/servicios-villas-de-lujo.png";
import servive_wellness_img from "@/assets/images/servicios-bienestar.png";
import service_chefs_img from "@/assets/images/servicios-chef.png";
import service_unique_experiencies_img from "@/assets/images/servicios-experiencias-unicas.png";
import service_jets_img from "@/assets/images/servicios-jet-privados.png";
import service_vip_tables_img from "@/assets/images/servicios-mesas-vip.png";
import service_event_production_img from "@/assets/images/servicios-produccion-de-eventos.png";
import service_reservations_img from "@/assets/images/servicios-reservas.png";
import service_security_img from "@/assets/images/servicios-seguridad.png";
import service_tours_img from "@/assets/images/servicios-tours.png";
import service_transfers_img from "@/assets/images/servicios-traslados.png";
import service_premium_vehicles_img from "@/assets/images/servicios-vehiculos-premium.png";
import service_yachts_img from "@/assets/images/servicios-yates.png";
import service_super_yatchs_img from "@/assets/images/servicios-super-yates.png";

export const images = [
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
  {
    desktop_xl: img_desktop_xl.src,
    desktop: img_desktop.src,
    tablet: img_tablet.src,
    mobile: img_mobile.src,
  },
];

export const cards_imgs = [
  {
    image: service_villas_img.src,
  },
  {
    image: service_yachts_img.src,
  },
  {
    image: service_premium_vehicles_img.src,
  },
  {
    image: service_jets_img.src,
  },
  {
    image: service_event_production_img.src,
  },
  {
    image: servive_wellness_img.src,
  },
  {
    image: service_chefs_img.src,
  },
  {
    image: service_unique_experiencies_img.src,
  },
  {
    image: service_vip_tables_img.src,
  },
  {
    image: service_reservations_img.src,
  },
  {
    image: service_security_img.src,
  },
  {
    image: service_tours_img.src,
  },
  {
    image: service_transfers_img.src,
  },
];

export const big_cards_imgs = [
  {
    image: service_unique_experiencies_img.src,
    link: "/experiencias-unicas",
  },
  {
    image: service_super_yatchs_img.src,
    link: "/super-yates",
  },
];

export type Images = typeof images;
export type CardsImgs = typeof cards_imgs;
export type BigCardsImgs = typeof big_cards_imgs;
