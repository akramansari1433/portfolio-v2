import { EmailTemplate } from "@/components/EmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, subject, message } = req.body;

    const { data, error } = await resend.emails.send({
        from: "contact@akramansari.dev",
        to: "akramansari1433@gmail.com",
        subject,
        text: message,
        react: EmailTemplate({
            name,
            email,
            subject,
            message,
        }),
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
}
