import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'fintech-it-solutions-backend',
    time: new Date().toISOString(),
  });
});

export default router;