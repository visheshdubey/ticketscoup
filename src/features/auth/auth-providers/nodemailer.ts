import Nodemailer from 'next-auth/providers/nodemailer';

const nodemailerConfig = {
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
};

export const NodeMailerAuth = Nodemailer(nodemailerConfig);
