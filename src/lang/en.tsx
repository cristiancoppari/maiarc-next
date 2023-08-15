export const en = {
  header: {
    content: {
      nav_links_left: [
        {
          type: "link",
          label: "Who we are",
          href: "/quienes-somos",
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
  contact: {
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
          pattern: "You have to enter more than 1 character",
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
  ctas: {
    consultation: "More",
    subscription: "Subscribe",
  },
  card: {
    included: "Included",
    not_included: "Not included",
  },
  newsletter: {
    placeholder: "Enter your email",
  },
};

export type Lang = typeof en;
