import { MailConfig, MailOptions, MailSendResponse } from './types';

import nodemailer from 'nodemailer';

export class NodemailerSingleton {
    private static instance: NodemailerSingleton;
    private transporter: nodemailer.Transporter;

    private constructor(private config: MailConfig) {
        this.transporter = nodemailer.createTransport(config);
    }

    public static getInstance(config: MailConfig): NodemailerSingleton {
        if (!NodemailerSingleton.instance) {
            NodemailerSingleton.instance = new NodemailerSingleton(config);
        }
        return NodemailerSingleton.instance;
    }

    public async send(mailOptions: MailOptions): Promise<MailSendResponse> {
        const options = {
            ...mailOptions,
        };

        const info = await this.transporter.sendMail(options);
        console.log('Message sent: %s', info.messageId);

        return {
            messageId: info.messageId,
        };
    }
}
