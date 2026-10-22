import nodemailer, { type Transporter } from 'nodemailer';
import { env } from '../config/env.js';

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  return transporter;
}

export type SendMailArgs = {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  to?: string;
};

export async function sendMail(args: SendMailArgs): Promise<void> {
  const t = getTransporter();
  await t.sendMail({
    from: `"FINTECH IT SOLUTIONS" <${env.SMTP_USER}>`,
    to: args.to || env.MAIL_TO,
    subject: args.subject,
    text: args.text,
    html: args.html,
    replyTo: args.replyTo,
  });
}

export async function verifySmtp(): Promise<void> {
  const t = getTransporter();
  await t.verify();
}