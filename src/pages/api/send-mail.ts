import type { NextApiRequest, NextApiResponse } from "next";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

import * as nodemailer from "nodemailer";

type ResponseData = {
  message: string;
};

const ZOHO_USER = process.env.ZOHO_USER;
const ZOHO_PASS = process.env.ZOHO_PASS;

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: ZOHO_USER,
      pass: ZOHO_PASS,
    },
  });

  const mailOptions = {
    from: ZOHO_USER, // sender address
    to: "julieta93fraga@gmail.com",
    subject: "MAIARC Concierge - Nuevo mensaje de contacto",
    html: `
        <p>Este es un nuevo mensaje de contacto de MAIARC Concierge<p>
        <p>Este es un correo de prueba mandado desde la web.</p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}
