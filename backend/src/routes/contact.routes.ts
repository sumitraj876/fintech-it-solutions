import { Router } from 'express';
import { z } from 'zod';
import { rateLimit } from '../middleware/rateLimit.js';
import { sendContactEmail } from '../services/contact.service.js';

const router = Router();

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(120),
  email: z.string().email('Enter a valid email'),
  company: z.string().max(160).optional().or(z.literal('')),
  service: z.string().min(2, 'Select a service').max(120),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  preferredContact: z.string().max(60).optional().or(z.literal('')),
  website: z.string().max(0).optional().or(z.literal('')),
});

const contactLimiter = rateLimit({ windowMs: 10 * 60 * 1000, max: 5 });

router.post('/contact', contactLimiter, async (req, res, next) => {
  try {
    const data = schema.parse(req.body);
    if (data.website) return res.json({ ok: true });

    await sendContactEmail({
      name: data.name,
      email: data.email,
      company: data.company || undefined,
      service: data.service,
      message: data.message,
      preferredContact: data.preferredContact || undefined,
    });

    return res.json({ ok: true });
  } catch (err) {
    return next(err);
  }
});

export default router;