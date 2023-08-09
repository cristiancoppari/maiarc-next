import type { Root as ApiResponseServices } from "@/types/api-services";
import type { Root as ApiResponsePremiumServices } from "@/types/api-premium-services";
import type { Root as ApiResponseVilla } from "@/types/api-villas";
import type { Root as ApiResponseDestination } from "@/types/api-destinations";
import type { Root as ApiResponseYatch } from "@/types/api-yatches";
import type { Root as ApiResponseSuperYatch } from "@/types/api-super-yatches";
import type { Root as ApiResponseHotel } from "@/types/api-hotels";
import type { Root as ApiResponsePremiumVehicle } from "@/types/api-premium-vehicles";
import type { Root as ApiResponseUniqueExperience } from "@/types/api-unique-experiences";
import type { Root as ApiResponseRealEstates } from "@/types/api-real-estates";
import type {
  Service,
  Villa,
  Destination,
  Yatch,
  Hotel,
  PremiumVehicle,
  SuperYatch,
  UniqueExperience,
  RealEstateItem,
} from "@/types/services";

// Get all services filtered by locale
export const fetchServices = async (locale: string): Promise<Service[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/services/?&locale=${locale}&fields[0]=name&populate[main_image][fields][0]=url&populate[images][fields][0]=url&fields=description&fields=is_clickable`,
    );

    const data = (await res.json()) as ApiResponseServices;

    const services = data.data.map((element): Service => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image?.data.attributes.url,
        description: element.attributes.description ?? null,
        is_clickable: element.attributes.is_clickable,
      };
    });

    return services;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchPremiumServices = async (locale: string): Promise<Service[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/premium-services/?locale=${locale}&fields[0]=name&populate[main_image][fields][0]=url&populate[images][fields][0]=url&fields=description`,
    );

    const data = (await res.json()) as ApiResponsePremiumServices;

    const premium_services = data.data.map((element): Service => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image?.data.attributes.url ?? null,
        description: element.attributes.description ?? null,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
      };
    });

    return premium_services;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchVillas = async (): Promise<Villa[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/villas/?fields=name&fields=locale&fields=capacity&fields=rooms&fields=includes_breakfast&populate[main_image][fields]=url&populate[images][fields]=url&fields=location&populate[destination][fields]=name`,
    );

    const data = (await res.json()) as ApiResponseVilla;

    const villas = data.data.map((element): Villa => {
      return {
        id: element.id,
        name: element.attributes.name,
        location: element.attributes.location,
        destination: element.attributes.destination.data.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        rooms: element.attributes.rooms,
        capacity: element.attributes.capacity,
        includes_breakfast: element.attributes.includes_breakfast,
      };
    });

    return villas;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchDestinations = async (): Promise<Destination[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/destinations/?fields=name&populate[main_image][fields]=url&fields=slug`,
    );

    const data = (await res.json()) as ApiResponseDestination;

    const destinations = data.data.map((element): Destination => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        slug: element.attributes.slug,
      };
    });

    return destinations;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchYatchs = async (): Promise<Yatch[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/yatches/?fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity`,
    );

    const data = (await res.json()) as ApiResponseYatch;

    const yatchs = data.data.map((element): Yatch => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        destination: element.attributes.destination.data.attributes.name,
        location: element.attributes.location ?? null,
        capacity: element.attributes.capacity,
      };
    });

    return yatchs;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchSuperYatches = async (): Promise<SuperYatch[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/super-yatches/?fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity`,
    );

    const data = (await res.json()) as ApiResponseSuperYatch;

    const super_yatches = data.data.map((element): SuperYatch => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        location: element.attributes.location ?? null,
        capacity: element.attributes.capacity ?? null,
        cabins: element.attributes.cabins ?? null,
      };
    });

    return super_yatches;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchHotels = async (): Promise<Hotel[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/hotels/?fields=name&fields=includes_breakfast&fields=stars&fields=capacity&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name?locale=all`,
    );

    const data = (await res.json()) as ApiResponseHotel;

    const hotels = data.data.map((element): Hotel => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        destination: element.attributes.destination.data.attributes.name,
        capacity: element.attributes.capacity,
        stars: element.attributes.stars,
        location: element.attributes.location,
      };
    });

    return hotels;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchPremiumVehicles = async (): Promise<PremiumVehicle[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/premium-vehicles/?fields=name&fields=type&fields=capacity&fields=transmission&fields=type&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name`,
    );

    const data = (await res.json()) as ApiResponsePremiumVehicle;

    const vehicles = data.data.map((element): PremiumVehicle => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        destination: element.attributes.destination.data.attributes.name,
        capacity: element.attributes.capacity,
        type: element.attributes.type,
        transmission: element.attributes.transmission,
      };
    });

    return vehicles;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchUniqueExperiences = async (locale: string): Promise<UniqueExperience[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/unique-experiences/?locale=${locale}&fields=locale&&fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=description`,
    );

    const data = (await res.json()) as ApiResponseUniqueExperience;

    const unique_experiences = data.data.map((element): UniqueExperience => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        // images: element.attributes.images.data.map((image) => {
        //   return image;
        // }),
        location: element.attributes.location ?? null,
      };
    });

    console.log(unique_experiences);

    return unique_experiences;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchRealEstates = async (): Promise<RealEstateItem[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/real-estates/?fields=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=bathrooms`,
    );

    const data = (await res.json()) as ApiResponseRealEstates;

    const real_estate_data = data.data.map((element): RealEstateItem => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        images: element.attributes.images.data.map((image) => {
          return image.attributes.url;
        }),
        location: element.attributes.location ?? null,
        bathrooms: element.attributes.bathrooms ?? null,
      };
    });

    return real_estate_data;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};
