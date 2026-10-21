import type { Request, Response, NextFunction } from 'express';

type Bucket = { count: number; resetAt: number };

/**
 * Tiny in-memory rate limiter — no dependencies.
 * Good enough to stop accidental floods and simple scraping.
 * For real production scale, use express-rate-limit + Redis.
 */
export function rateLimit(opts: { windowMs: number; max: number }) {
  const hits = new Map<string, Bucket>();

  // Periodic cleanup so the map doesn't grow forever
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of hits) {
      if (bucket.resetAt < now) hits.delete(key);
    }
  }, opts.windowMs).unref();

  return function limiter(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip ?? req.socket.remoteAddress ?? 'unknown';
    const now = Date.now();
    let bucket = hits.get(ip);

    if (!bucket || bucket.resetAt < now) {
      bucket = { count: 0, resetAt: now + opts.windowMs };
      hits.set(ip, bucket);
    }

    bucket.count += 1;

    res.setHeader('X-RateLimit-Limit', String(opts.max));
    res.setHeader('X-RateLimit-Remaining', String(Math.max(0, opts.max - bucket.count)));

    if (bucket.count > opts.max) {
      const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      return res.status(429).json({
        ok: false,
        error: 'Too many requests. Please try again later.',
      });
    }

    next();
  };
}