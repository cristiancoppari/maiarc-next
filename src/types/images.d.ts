export interface ImagePack {
  desktop_xl: string;
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface ImageProps {
  images: ImagePack[];
}

export interface SvgImport {
  src: string;
}
