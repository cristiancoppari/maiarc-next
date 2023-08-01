/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Root {
  data: Daum[];
  meta: Meta;
}

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
  image: Image;
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  url: string;
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
