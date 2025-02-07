export interface MailConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
    attachments?: { filename: string; content: string }[];
}

export interface MailSendResponse {
    messageId: string;
}
