import type { SendMailOptions, Transporter } from "nodemailer";

import nodemailer from "nodemailer";

export class EmailClient {
  private static instance: EmailClient;
  private transporter: Transporter;

  private constructor(
    config: nodemailer.TransportOptions | nodemailer.Transport | string
  ) {
    this.transporter = nodemailer.createTransport(config);
  }

  public static getInstance(
    config?: nodemailer.TransportOptions | nodemailer.Transport | string
  ): EmailClient {
    if (!EmailClient.instance) {
      if (!config) {
        throw new Error(
          "EmailClient must be initialized with config first time"
        );
      }
      EmailClient.instance = new EmailClient(config);
    }
    return EmailClient.instance;
  }

  /**
   * Send an email using the configured transporter
   */
  public async sendEmail(options: SendMailOptions): Promise<void> {
    try {
      await this.transporter.sendMail(options);
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Failed to send email");
    }
  }

  /**
   * Simplified method to send a basic email
   */
  public async sendBasicEmail(
    to: string | string[],
    subject: string,
    text?: string,
    html?: string
  ): Promise<void> {
    const mailOptions: SendMailOptions = {
      to,
      subject,
      text,
      html,
    };

    await this.sendEmail(mailOptions);
  }

  /**
   * Verify transporter configuration
   */
  public async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error("Failed to verify email connection:", error);
      return false;
    }
  }
}
