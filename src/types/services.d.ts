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
  destination: string;
  location: string | null;
  capacity: number;
  images: string[];
}

export interface Villa extends Accommodation {
  rooms: number;
  includes_breakfast: boolean;
}

export interface Hotel extends Accommodation {
  stars: number;
}

export interface Apartment extends Accommodation {
  rooms: number;
  sq_foot: number;
}

export interface PremiumVehicle extends Service {
  destination: string;
  images: string[];
  capacity: number;
  type: string;
  transmission: string;
  // type: "coupe" | "sedan" | "suv" | "van" | "luxury";
  // transmision: "A/T" | "M/T";
}

export interface Yatch extends Service {
  destination: string;
  location: string | null;
  capacity: number;
  images: string[];
}

export interface SuperYatch extends Yatch {
  cabins: number;
}

export interface UniqueExperience extends Service {
  location: string;
}
