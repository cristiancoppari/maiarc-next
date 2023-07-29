export const es = {
  header: {
    content: {
      nav_links_left: [
        {
          type: "link",
          label: "Quiénes somos",
          href: "/quienes-somos",
        },
        {
          type: "dropdown",
          label: "Los destinos",
          href: "/destinos",
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
          label: "Experiencias únicas",
          href: "/experiencias-unicas",
        },
        {
          type: "link",
          label: "Superyates",
          href: "/super-yates",
        },
        {
          type: "link",
          label: "Contacto",
          href: "/contacto",
        },
      ],
    },
  },
  footer: {
    content: "Política de privacidad y Avisos Legales",
  },
  home: {
    title:
      "Donde el lujo y la exclusividad cobran vida. Descubre nuestra gama de servicios exclusivos con un solo clic",
    text: "Ponemos a su disposición servicios únicos en Tulum, Ibiza, Miami y los destinos más exclusivos a nivel global. Diseñamos experiencias personalizadas para convertir tus expectativas en vivencias inolvidables.",
    services_gallery: {
      cards: [
        {
          title: "Villas de Lujo",
        },
        {
          title: "Yates",
        },
        {
          title: "Vehículos Premium",
        },
        {
          title: "Jet Privado / Helicóptero",
        },
        {
          title: "Producción de eventos",
        },
        {
          title: "Bienestar",
        },
        {
          title: "Reservaciones",
        },
        {
          title: "Tours",
        },
        {
          title: "Reservas",
        },
        {
          title: "Seguridad",
        },
        {
          title: "Chef",
        },
        {
          title: "Mesas Vip",
        },
      ],
      cta: "Contacto",
    },
    big_gallery: {
      cards: [
        {
          title: "Villas de Lujo",
          description:
            "Disfruta de los eventos más exclusivos del calendario VIP mundial. Maiarc se encarga de diseñarte una experiencia única y personalizada.",
          cta_label: "Ver más",
        },
        {
          title: "Yates",
          description:
            "Nuestro broker especializado te brinda acceso a los yates más exclusivos en cualquier parte del mundo. Sumergete en destinos paradisíacos, disfruta de servicios de alta gama y vive una experiencia única.",
          cta_label: "Ver más",
        },
      ],
    },
    accommodations: {
      title: "Tu próximo alojamiento de lujo",
      text: "Recorré las propiedades que tenemos a disposición y elegí el lugar perfecto para vos. Contactanos para más información.",
      cta: {
        label: "Ver más",
        href: "/experiencias-unicas",
      },
    },
    instagram_gallery: {
      title: "Nuestra comunidad",
      text: "Se parte! Seguinos en Instagram @maiarc.concierge.",
    },
    newsletter: {
      title: "Inspirate",
      text: "Suscribite al newsletter y sé el primero en enterarte de las últimas novedades y experiencias que tenemos para brindarte dentro del lujo global.",
      cta: "Suscribirme",
    },
  },
  contact: {
    title: "Contacto",
    text: "Contactanos para más información. Estamos aquí para ayudarte.",
    form: {
      name: {
        label: "Nombre",
        placeholder: "Juan Carlos",
        error: {
          required: "Tienes que ingresar un nombre",
          pattern: "Tienes que ingresar mas de 1 caracter",
        },
      },
      phone: {
        label: "Teléfono",
        placeholder: "123456789",
        error: {
          required: "Tienes que ingresar un teléfono",
          pattern: "Tienes que ingresar un teléfono válido",
        },
      },
      email: {
        label: "Email",
        placeholder: "juan.carlos@gmail.com",
        error: {
          required: "Tienes que ingresar un email",
          pattern: "Tienes que ingresar un email válido",
        },
      },
      message: {
        label: "Mensaje",
        placeholder: "Hola, quisiera más información sobre...",
        error: {
          required: "Tienes que ingresar un mensaje",
          pattern: "Tienes que ingresar mas de 1 caracter",
        },
      },
      destinations: {
        label: "Destino",
        placeholder: "Selecciona un destino",
        error: {
          required: "Tienes que ingresar un destino",
          pattern: "Tienes que ingresar mas de 1 caracter",
        },
      },
      date_start: {
        label: "Fecha de inicio",
        placeholder: "Selecciona una fecha",
        error: {
          required: "Tienes que ingresar una fecha",
          pattern: "Tienes que ingresar una fecha válida",
        },
      },
      date_end: {
        label: "Fecha de fin",
        placeholder: "Selecciona una fecha",
        error: {
          required: "Tienes que ingresar una fecha",
          pattern: "Tienes que ingresar una fecha válida",
        },
      },
      submit: "Enviar",
    },
  },
  who_we_are: {
    section_1: {
      title: "Quienes somos",
      texts: [
        "Somos una empresa de concierge de lujo que ofrece servicios exclusivos en Tulum, Ibiza, Miami y los destinos más exclusivos a nivel global.",
        "Nuestro objetivo es brindar experiencias únicas y personalizadas a nuestros clientes, para que puedan disfrutar de los mejores destinos del mundo.",
        "Contamos con un equipo de profesionales altamente capacitados para brindar un servicio de excelencia y calidad.",
      ],
    },
    section_2: {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, assumenda!",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      texts: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, assumenda!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat quidem numquam nulla architecto nesciunt assumenda dolorem necessitatibus, deserunt ducimus?",
      ],
    },
  },
};

export type Lang = typeof es;
