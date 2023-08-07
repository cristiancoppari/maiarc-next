import type { Root as ApiResponseServices } from "@/types/api-services";
import type { Root as ApiResponsePremiumServices } from "@/types/api-premium-services";
import type { Root as ApiResponseVilla } from "@/types/api-villas";
import type { Root as ApiResponseDestination } from "@/types/api-destinations";
import type { Service, Villa, Destination } from "@/types/services";

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
      `${process.env.API_URL}/premium-services/?&locale=${locale}&fields[0]=name&populate[main_image][fields][0]=url&populate[images][fields][0]=url&fields=description`,
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
