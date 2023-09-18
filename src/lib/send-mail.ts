import type SMTPTransport from "nodemailer/lib/smtp-transport";

import * as nodemailer from "nodemailer";

const ZOHO_USER = process.env.ZOHO_USER;
const ZOHO_APP_PASS = process.env.ZOHO_APP_PASS;

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date_start: string;
  date_end: string;
  service: string;
  destination: string;
}

export default async function sendMail(data: IFormData) {
  const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: ZOHO_USER,
      pass: ZOHO_APP_PASS,
    },
  });

  const mailOptions = {
    from: ZOHO_USER,
    to: "cristian.coppari@gmail.com",
    subject: "MAIARC Concierge ⚜️ - Nuevo mensaje de contacto",
    html: `
        <h1>Nuevo contacto:</h1>
        <p>Nombre: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Teléfono: ${data.phone}</p>
        <p>Mensaje: ${data.message}</p>
        <p>Consulta por: ${data.service ?? "no ingresado"}</p>
        <p>Fecha de entrada: ${data.date_start ?? "no ingresado"}</p>
        <p>Fecha de salida: ${data.date_end ?? "no ingresado"}</p>
        <p>Destino: ${data.destination ?? "no ingresado"}</p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
}
