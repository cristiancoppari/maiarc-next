export interface Destination {
  id: string | number;
  name: string;
  main_image: string;
  slug: string;
}

export interface Service {
  id: string | number;
  name: string;
  subtitle?: string;
  description?: string | null;
  main_image: string;
  images?: string[];
  is_clickable?: boolean;
}

export interface Accommodation extends Service {
  service_type: "accommodation";
  destination: string;
  location: string | null;
  capacity: number;
  images: string[];
  uuid: string;
}

export interface Villa extends Accommodation {
  service_type: "villa";
  rooms: number;
  includes_breakfast: boolean;
  uuid: string;
}

export interface Hotel extends Accommodation {
  service_type: "hotel";
  stars: number;
  uuid: string;
}

export interface RealEstateItem extends Service {
  service_type: "real_estate";
  location: string;
  bathrooms?: number;
  uuid: string;
  uuid: string;
  // rooms: number;
}

export interface PremiumVehicle extends Service {
  service_type: "premium_vehicle";
  destination: string;
  images: string[];
  capacity: number;
  type: string;
  transmission: string;
  uuid: string;
  // type: "coupe" | "sedan" | "suv" | "van" | "luxury";
  // transmision: "A/T" | "M/T";
}

export interface Yatch extends Service {
  service_type: "yatch";
  destination: string;
  location: string | null;
  capacity: number;
  images: string[];
  uuid: string;
}

export interface SuperYatch extends Service {
  service_type: "super_yatch";
  location: string | null;
  capacity: number;
  images: string[];
  cabins: number;
  uuid: string;
}

export interface UniqueExperience extends Service {
  service_type: "unique_experience";
  location: string;
  uuid: string;
}
