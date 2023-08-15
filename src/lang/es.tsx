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
          label: "Destinos",
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
  contact: {
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
  ctas: {
    more: "Más información",
    consultation: "Consultar",
    subscription: "Suscribirse",
  },
  card: {
    included: "Incluido",
    not_included: "No incluido",
  },
  newsletter: {
    placeholder: "Ingresa tu email",
  },
};

export type Lang = typeof es;
