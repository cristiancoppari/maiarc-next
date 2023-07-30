export interface Root {
  data: Daum[];
  meta: Meta;
}

export interface Daum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  persons: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  location: Location;
  images: Images;
  localizations: Localizations;
}

export interface Location {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  city: string;
}

export interface Images {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  alternativeText: unknown;
  caption: unknown;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: unknown;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  small?: Small;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: unknown;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: unknown;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Localizations {
  data: unknown[];
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
