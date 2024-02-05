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
import type { Root as ApiResponseAboutUsPage } from "@/types/api-about-us";
import type { Root as ApiResponseHomePage } from "@/types/api-home";
import type { Root as ApiResponseContactPage } from "@/types/api-contact";
import type { Root as ApiResponseDestinosPage } from "@/types/api-destinos";
import type { Root as ApiResponseDestinoPage } from "@/types/api-destino";
import type { Root as ApiResponsePremiumServicePage } from "@/types/api-premium-services-page";
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
      `${process.env.API_URL}/villas/?fields=name&fields=locale&fields=capacity&fields=rooms&fields=includes_breakfast&populate[main_image][fields]=url&populate[images][fields]=url&fields=location&populate[destination][fields]=name&fields=uuid`,
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
        uuid: element.attributes.uuid,
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
      `${process.env.API_URL}/destinations/?fields=name&populate[main_image][fields]=url&fields=slug&fields=order`,
    );

    const data = (await res.json()) as ApiResponseDestination;

    const destinations = data.data.map((element): Destination => {
      return {
        id: element.id,
        name: element.attributes.name,
        main_image: element.attributes.main_image.data.attributes.url,
        slug: element.attributes.slug,
        order: element.attributes.order,
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
      `${process.env.API_URL}/yatches/?fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity&fields=uuid`,
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
        uuid: element.attributes.uuid,
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
      `${process.env.API_URL}/super-yatches/?fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=capacity&fields=uuid`,
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
        uuid: element.attributes.uuid,
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
      `${process.env.API_URL}/hotels/?fields=name&fields=includes_breakfast&fields=stars&fields=capacity&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name?locale=all&fields=uuid`,
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
        uuid: element.attributes.uuid,
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
      `${process.env.API_URL}/premium-vehicles/?fields=name&fields=type&fields=capacity&fields=transmission&fields=type&populate[main_image][fields]=url&populate[images][fields]=url&populate[destination][fields]=name&fields=uuid`,
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
        uuid: element.attributes.uuid,
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
      `${process.env.API_URL}/unique-experiences/?locale=${locale}&fields=locale&&fields[0]=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=description&fields=uuid`,
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
        uuid: element.attributes.uuid,
      };
    });

    return unique_experiences;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchRealEstates = async (): Promise<RealEstateItem[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/real-estates/?fields=name&fields=location&populate[main_image][fields]=url&populate[images][fields]=url&fields=bathrooms&fields=uuid`,
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
        uuid: element.attributes.uuid,
        destination: "",
      };
    });

    return real_estate_data;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchAboutUsPage = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/about-us/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponseAboutUsPage;

    const about_us_page_data = {
      images: data.data.attributes.images.images.data.map((image) => {
        return image.attributes.url;
      }),
      section_1: {
        title: data.data.attributes.section_1.title,
        text: data.data.attributes.section_1.text,
        style: data.data.attributes.section_1.style,
        image: data.data.attributes.section_1.image,
        main_image: data.data.attributes.section_1.main_image.data.attributes.url,
      },
      block_1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
        main_image: data.data.attributes.block_1.main_image.data.attributes.url,
      },
      block_2: {
        title: data.data.attributes.block_2.title,
        text: data.data.attributes.block_2.text,
        main_image: data.data.attributes.block_2.main_image.data.attributes.url,
      },
      block_with_background: {
        title_1: data.data.attributes.block_with_background.title_1,
        title_2: data.data.attributes.block_with_background.title_2,
        text: data.data.attributes.block_with_background.text,
        background_image: data.data.attributes.block_with_background.background_image.data.attributes.url,
      },
    };

    return about_us_page_data;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchHomePage = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/home-page/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponseHomePage;

    const home_page = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url;
        }),
      },
      clickable_services: data.data.attributes.clickable_services.data.map((service): Service => {
        return {
          id: service.id,
          name: service.attributes.name,
          main_image: service.attributes.main_image.data.attributes.url,
          selector: service.attributes.selector,
        };
      }),
      services_block: {
        title: data.data.attributes.services_block.title,
        text: data.data.attributes.services_block.text,
        services: data.data.attributes.services_block.services.data.map((service): Service => {
          return {
            id: service.id,
            name: service.attributes.name,
            main_image: service.attributes.main_image.data.attributes.url,
          };
        }),
      },
      premium_services_block: {
        premium_services: data.data.attributes.premium_services_block.items.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.name,
            main_image: item.attributes.main_image.data.attributes.url,
            description: item.attributes.description,
          };
        }),
      },
      accommodations_block: {
        title: data.data.attributes.accommodations_block.title,
        text: data.data.attributes.accommodations_block.text,
      },
      community_block: {
        title: data.data.attributes.community_block.title,
        text: data.data.attributes.community_block.text,
      },
      newsletter_block: {
        title: data.data.attributes.newsletter_block.title,
        text: data.data.attributes.newsletter_block.text,
      },
    };

    return home_page;
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};

export const fetchContactPage = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/contact-page/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponseContactPage;

    const contact_page = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url;
        }),
      },
      block_1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
      },
    };

    return contact_page;
  } catch (error) {
    console.error(error);
    // throw new Error("Hubo un error");
  }
};

export const fetchDestinosPage = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/destinos-page/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponseDestinosPage;

    const destinos_page = {
      block_1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
      },
    };

    return destinos_page;
  } catch (error) {
    console.error(error);
    // throw new Error("Hubo un error");
  }
};

export const fetchDestinoPage = async (locale: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/destino-page/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponseDestinoPage;

    const destino_page = {
      title: data.data.attributes.title,
      texts: {
        miami: data.data.attributes.miami_text,
        ibiza: data.data.attributes.ibiza_text,
        tulum: data.data.attributes.tulum_text,
        "punta-del-este": data.data.attributes.pde_text,
      },
      services: data.data.attributes.clickable_services.data.map((service): Service => {
        return {
          id: service.id,
          name: service.attributes.name,
          main_image: service.attributes.main_image.data.attributes.url,
          selector: service.attributes.selector,
          tulum_img: service.attributes.tulum_img.data?.attributes.url ?? null,
          pde_img: service.attributes.pde_img.data?.attributes.url ?? null,
          miami_img: service.attributes.miami_img.data?.attributes.url ?? null,
          ibiza_img: service.attributes.ibiza_img.data?.attributes.url ?? null,
        };
      }),
      hero_images: {
        ibiza: data.data.attributes.images_ibiza.data.map((image) => {
          return image.attributes.url;
        }),
        tulum: data.data.attributes.images_tulum.data.map((image) => {
          return image.attributes.url;
        }),
        miami: data.data.attributes.images_miami.data.map((image) => {
          return image.attributes.url;
        }),
        "punta-del-este": data.data.attributes.images_punta_del_este.data.map((image) => {
          return image.attributes.url;
        }),
      },
    };

    return destino_page;
  } catch (error) {
    console.error(error);
    // throw new Error("Hubo un error");
  }
};

export const fetchPremiumServicePage = async (locale: string, service: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/${service}-page/?populate=deep&locale=${locale}`);

    const data = (await res.json()) as ApiResponsePremiumServicePage;

    const premium_service_page = {
      hero: {
        images: data.data.attributes.hero.images.data.map((image) => {
          return image.attributes.url;
        }),
      },
      block_1: {
        title: data.data.attributes.block_1.title,
        text: data.data.attributes.block_1.text,
        style: data.data.attributes.block_1.style,
        image: data.data.attributes.block_1.image,
        main_image: data.data.attributes.block_1.main_image.data.attributes.url,
      },
      block_2: {
        title: data.data.attributes.block_2.title,
        text: data.data.attributes.block_2.text,
        style: data.data.attributes.block_2.style,
        image: data.data.attributes.block_2.image,
        main_image: data.data.attributes.block_2.main_image.data.attributes.url,
      },
    };

    return premium_service_page;
  } catch (error) {
    console.error(error);
    // throw new Error("Hubo un error");
  }
};
