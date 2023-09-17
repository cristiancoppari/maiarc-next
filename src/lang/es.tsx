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
      prefix: {
        label: "Código de país",
        placeholder: "+54",
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
  privacyPolicy: {
    title: "Política de Privacidad de Maiarc Concierge",
    lastUpdated: "18/9/2023",
    description:
      "Esta Política de Privacidad describe cómo se recopila, utiliza y comparte su información personal cuando visita o realiza una compra en Maiarc Concierge.",
    sections: [
      {
        title: "1. Información Personal que Recopilamos",
        content:
          "Cuando visita la Compañía, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo. Además, mientras navega por la Compañía, recopilamos información sobre las páginas web individuales o productos que visualiza, qué sitios web o términos de búsqueda lo remitieron a la Compañía e información sobre cómo interactúa con la Compañía.",
      },
      {
        title: "2. Cómo Utilizamos Su Información Personal",
        content:
          "Usamos la información que recopilamos en general para cumplir con cualquier pedido realizado a través de la Compañía (incluido el procesamiento de su información de pago, la organización del envío y la provisión de facturas y/o confirmaciones de pedido). Además, usamos esta información para comunicarnos con usted, revisar nuestros pedidos en busca de riesgos o fraudes potenciales y proporcionarle información o publicidad relacionada con nuestros productos o servicios.",
      },
      {
        title: "3. Compartiendo Su Información Personal",
        content:
          "Compartimos su Información Personal con terceros para ayudarnos a usar su Información Personal, como se describió anteriormente. También utilizamos Google Analytics para ayudarnos a comprender cómo nuestros clientes usan la Compañía.",
      },
      {
        title: "4. Sus Derechos",
        content:
          "Si es residente europeo, tiene derecho a acceder a la información personal que tenemos sobre usted y a solicitar que su información personal sea corregida, actualizada o eliminada. Si desea ejercer este derecho, contáctenos a través de la información de contacto a continuación.",
      },
      {
        title: "5. Retención de Datos",
        content:
          "Cuando realiza un pedido a través de la Compañía, mantendremos la información de su pedido en nuestros registros a menos que y hasta que nos pida que eliminemos esta información.",
      },
      {
        title: "6. Cambios",
        content:
          "Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o reglamentarios.",
      },
      {
        title: "7. Contáctenos",
        content:
          "Para obtener más información sobre nuestras prácticas de privacidad, si tiene preguntas o si desea presentar una queja, contáctenos por correo electrónico a [su correo electrónico] o por correo utilizando los detalles proporcionados a continuación: [Su Dirección]",
      },
    ],
  },
};

export type Lang = typeof es;
