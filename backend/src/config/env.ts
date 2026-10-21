import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  SMTP_HOST: z.string().min(1, 'SMTP_HOST is required'),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_USER: z.string().email('SMTP_USER must be an email'),
  SMTP_PASS: z.string().min(8, 'SMTP_PASS looks too short'),
  MAIL_TO: z.string().email('MAIL_TO must be an email'),
  PORT: z.coerce.number().int().positive().default(4000),
  CORS_ORIGIN: z.string().min(1).default('http://localhost:5173'),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:');
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;