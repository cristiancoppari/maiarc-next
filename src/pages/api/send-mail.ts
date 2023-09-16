import type { NextApiRequest, NextApiResponse } from "next";

import sendMail, { type IFormData } from "@/lib/send-mail";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    await sendMail(req.body as IFormData);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}
