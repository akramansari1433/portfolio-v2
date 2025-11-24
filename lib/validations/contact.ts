import { z } from "zod";

// Shared validation schema for contact form
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters")
        .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
    email: z.string().email("Invalid email address"),
    subject: z
        .string()
        .min(3, "Subject must be at least 3 characters")
        .max(100, "Subject must be less than 100 characters"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters")
        .refine((val) => {
            // Check for long random strings (20+ chars without spaces)
            const hasLongRandomString = /[a-zA-Z]{20,}/.test(val);
            return !hasLongRandomString;
        }, "Message appears to be spam"),
    website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
