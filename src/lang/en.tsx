export const en = {
  header: {
    content: {
      nav_links_left: [
        {
          type: "link",
          label: "Who we are",
          href: "/",
        },
        {
          type: "dropdown",
          label: "Destinations",
          items: [
            {
              type: "link",
              label: "Tulum",
              href: "/destinos/tulum",
            },
            {
              type: "link",
              label: "Miami",
              href: "/destinos/miami",
            },
            {
              type: "link",
              label: "Punta del Este",
              href: "/destinos/punta-del-este",
            },
            {
              type: "link",
              label: "Ibiza",
              href: "/destinos/ibiza",
            },
          ],
          href: "/destinos",
        },
        {
          type: "link",
          label: "Real Estate",
          href: "/real-estate",
        },
      ],
      nav_links_right: [
        {
          type: "link",
          label: "Unique Experiences",
          href: "/experiencias-unicas",
        },
        {
          type: "link",
          label: "Superyachts",
          href: "/super-yates",
        },
        {
          type: "link",
          label: "Contact",
          href: "/contacto",
        },
      ],
    },
  },
  footer: {
    content: "Privacy Policy and Legal Notices",
  },
  home: {
    title:
      "Where luxury and exclusivity come to life. Discover our range of exclusive services with a single click",
    text: "We offer unique services in Tulum, Ibiza, Miami and the most exclusive destinations worldwide. We design personalized experiences to turn your expectations into unforgettable experiences.",
    services_gallery: {
      cards: [
        {
          title: "Luxury Villas",
        },
        {
          title: "Yatchs",
        },
        {
          title: "Premium Vehicles",
        },
        {
          title: "Private Flights",
        },
        {
          title: "Event production",
        },
        {
          title: "Wellness",
        },
        {
          title: "Reservations",
        },
        {
          title: "Events",
        },
        {
          title: "Tours",
        },
        {
          title: "Security",
        },
        {
          title: "Chefs",
        },
        {
          title: "VIP Tables",
        },
        {
          title: "Transfers",
        },
      ],
      cta: "Contact",
    },
    big_gallery: {
      cards: [
        {
          title: "Luxury Villas",
          description:
            "We offer you the most exclusive villas in the world. Enjoy the best destinations with the highest quality services and the most exclusive amenities.",
          cta_label: "More",
        },
        {
          title: "Super Yachts",
          description:
            "We offer you the most exclusive villas in the world. Enjoy the best destinations with the highest quality services and the most exclusive amenities.",
          cta_label: "More",
        },
      ],
    },
    accommodations: {
      title: "Accommodations",
      text: "We offer you the most exclusive villas in the world. Enjoy the best destinations with the highest quality services and the most exclusive amenities.",
      cta: {
        label: "More",
        href: "/experiencias-unicas",
      },
    },
    instagram_gallery: {
      title: "Our community",
      text: "Be part! Follow us on Instagram @maiarc.concierge.",
    },
    newsletter: {
      title: "Inspire yourself",
      text: "Subscribe to the newsletter and be the first to find out about the latest news and experiences we have to offer you within the global luxury.",
      cta: "Subscribe",
    },
  },
  contact: {
    title: "Contact",
    text: "We are here to help you. Contact us and we will get back to you as soon as possible.",
    form: {
      name: {
        label: "Name",
        placeholder: "Juan Carlos",
        error: {
          required: "You have to enter a name",
          pattern: "You have to enter more than 1 character",
        },
      },
      phone: {
        label: "Phone",
        placeholder: "123456789",
        error: {
          required: "You have to enter a phone",
          pattern: "You have to enter more than 1 character",
        },
      },
      email: {
        label: "Email",
        placeholder: "juan.carlos@gmail.com",
        error: {
          required: "You have to enter an email",
          pattern: "You have to enter more than 1 character",
        },
      },
      message: {
        label: "Message",
        placeholder: "Leave a message",
        error: {
          required: "You have to enter a message",
          pattern: "You have to enter more than 1 character",
        },
      },
      destinations: {
        label: "Destinations",
        placeholder: "Select a destination",
        error: {
          required: "You have to select a destination",
        },
      },
      date_start: {
        label: "Start date",
        placeholder: "Select a date",
        error: {
          required: "You have to select a date",
          pattern: "You have to enter a valid date",
        },
      },
      date_end: {
        label: "End date",
        placeholder: "Select a date",
        error: {
          required: "You have to select a date",
          pattern: "You have to enter a valid date",
        },
      },
      submit: "Send",
    },
  },
};

export type Lang = typeof en;
