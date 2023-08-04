import type { Root as ApiResponse } from "@/types/api";
import type { Service } from "@/types/cards";

// Get all services filtered by locale
export const fetchServices = async (locale: string): Promise<Service[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/services/?&locale=${locale}&fields[0]=name&populate[main_image][fields][0]=url&populate[images][fields][0]=url&fields=description`,
    );

    const data = (await res.json()) as ApiResponse;

    const services = data.data.map((element): Service => {
      return {
        id: element.id,
        name: element.attributes.name,
        image: element.attributes.main_image?.data.attributes.url ?? null,
        description: element.attributes.description ?? null,
        images: element.attributes.images?.data.map((image) => {
          return image;
        }),
      };
    });

    return services;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchPremiumServices = async (
  locale: string,
): Promise<Service[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/premium-services/?&locale=${locale}&fields[0]=name&populate[main_image][fields][0]=url&populate[images][fields][0]=url&fields=description`,
    );

    const data = (await res.json()) as ApiResponse;

    const premium_services = data.data.map((element): Service => {
      return {
        id: element.id,
        name: element.attributes.name,
        image: element.attributes.main_image?.data.attributes.url ?? null,
        description: element.attributes.description ?? null,
        images: element.attributes.images?.data.map((image) => {
          return image;
        }),
      };
    });

    return premium_services;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};
