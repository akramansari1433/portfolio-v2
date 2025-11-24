import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

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
            return NextResponse.json(error, { status: 400 });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
