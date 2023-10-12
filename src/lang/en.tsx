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
              label: "Ibiza",
              href: "/destinos/ibiza",
            },
            {
              type: "link",
              label: "Tulum",
              href: "/destinos/tulum",
            },
            {
              type: "link",
              label: "Punta del Este",
              href: "/destinos/punta-del-este",
            },
            {
              type: "link",
              label: "Miami",
              href: "/destinos/miami",
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
      prefix: {
        label: "Country code",
        placeholder: "+54",
        error: {
          required: "Tienes que ingresar una fecha",
          pattern: "Tienes que ingresar una fecha válida",
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
    messages: {
      sending: "Sending mail...",
      success: "Your message has been sent",
      error: "There was an error sending your message",
    },
  },
  ctas: {
    more: "More",
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
  privacyPolicy: {
    title: "Privacy Policy for Maiarc Concierge",
    lastUpdated: "18/9/2023",
    description:
      "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Maiarc Concierge.",
    sections: [
      {
        title: "1. Personal Information We Collect",
        content:
          "When you visit the Company, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Company, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Company, and information about how you interact with the Company.",
      },
      {
        title: "2. How We Use Your Personal Information",
        content:
          "We use the information that we collect generally to fulfill any orders placed through the Company (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this information to communicate with you, screen our orders for potential risk or fraud, and provide you with information or advertising relating to our products or services.",
      },
      {
        title: "3. Sharing Your Personal Information",
        content:
          "We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Company.",
      },
      {
        title: "4. Your Rights",
        content:
          "If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.",
      },
      {
        title: "5. Data Retention",
        content:
          "When you place an order through the Company, we will maintain your order information for our records unless and until you ask us to delete this information.",
      },
      {
        title: "6. Changes",
        content:
          "We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.",
      },
      {
        title: "7. Contact Us",
        content:
          "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [your email] or by mail using the details provided below: [Your Address]",
      },
    ],
  },
};

export type Lang = typeof en;
