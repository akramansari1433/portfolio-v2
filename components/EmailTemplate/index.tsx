import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    subject,
    message,
}) => (
    <div>
        <h1>Hey There!</h1>
        <p>
            {name} has sent you a message from {email} with the subject: {subject}.
        </p>
        <p>{message}</p>
    </div>
);
