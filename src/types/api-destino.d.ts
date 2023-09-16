/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Root {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  miami_text: string;
  tulum_text: string;
  ibiza_text: string;
  pde_text: string;
  images_ibiza: ImagesIbiza;
  images_tulum: ImagesTulum;
  images_punta_del_este: ImagesPuntaDelEste;
  images_miami: ImagesMiami;
  clickable_services: ClickableServices;
  localizations: Localizations2;
}

export interface ImagesIbiza {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small?: Small;
  thumbnail: Thumbnail;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface ImagesTulum {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats2 {
  large: Large;
  small: Small2;
  medium: Medium;
  thumbnail: Thumbnail2;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface ImagesPuntaDelEste {
  data: Daum3[];
}

export interface Daum3 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats3;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats3 {
  thumbnail: Thumbnail3;
}

export interface Thumbnail3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface ImagesMiami {
  data: Daum4[];
}

export interface Daum4 {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats4;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats4 {
  thumbnail: Thumbnail4;
  small?: Small3;
}

export interface Thumbnail4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small3 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface ClickableServices {
  data: Daum5[];
}

export interface Daum5 {
  id: number;
  attributes: Attributes6;
}

export interface Attributes6 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  main_image: MainImage;
  localizations: Localizations;
  selector: string;
}

export interface MainImage {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes7;
}

export interface Attributes7 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats5;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats5 {
  large: Large2;
  small: Small4;
  medium: Medium2;
  thumbnail: Thumbnail5;
}

export interface Large2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Small4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail5 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface Localizations {
  data: Daum6[];
}

export interface Daum6 {
  id: number;
  attributes: Attributes8;
}

export interface Attributes8 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Localizations2 {
  data: Daum7[];
}

export interface Daum7 {
  id: number;
  attributes: Attributes9;
}

export interface Attributes9 {
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  miami_text: string;
  tulum_text: string;
  ibiza_text: string;
  pde_text: string;
}

export interface Meta {}
