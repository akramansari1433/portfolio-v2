import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting map (in-memory, consider Redis for production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const limit = rateLimitMap.get(ip);

    if (!limit || now > limit.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }); // 1 hour
        return true;
    }

    if (limit.count >= 3) {
        // Max 3 emails per hour per IP
        return false;
    }

    limit.count++;
    return true;
}

function isSpamContent(text: string): boolean {
    // Check for excessive URLs
    const urlCount = (text.match(/https?:\/\//g) || []).length;
    if (urlCount > 3) return true;

    return false;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate with zod schema
        const validationResult = contactFormSchema.safeParse(body);

        if (!validationResult.success) {
            const firstError = validationResult.error.issues[0];
            return NextResponse.json(
                { error: firstError.message },
                { status: 400 }
            );
        }

        const { name, email, subject, message, website } = validationResult.data;

        // Honeypot check
        if (website) {
            console.log("Spam detected: honeypot field filled");
            return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
        }

        // Rate limiting
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // Additional spam detection
        if (isSpamContent(message) || isSpamContent(subject)) {
            console.log("Spam detected: suspicious content pattern");
            return NextResponse.json(
                { error: "Message appears to be spam" },
                { status: 400 }
            );
        }

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
        console.error("Email send error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
