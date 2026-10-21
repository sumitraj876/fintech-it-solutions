import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'HttpError';
  }
}

export function notFoundHandler(req: Request, _res: Response, next: NextFunction) {
  next(new HttpError(404, `Not found: ${req.method} ${req.originalUrl}`));
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  // Zod validation errors → 400 with field details
  if (err instanceof ZodError) {
    return res.status(400).json({
      ok: false,
      error: 'Validation failed',
      issues: err.issues.map((i) => ({
        field: i.path.join('.'),
        message: i.message,
      })),
    });
  }

  // Our own HttpError
  if (err instanceof HttpError) {
    return res.status(err.status).json({ ok: false, error: err.message });
  }

  // Unexpected — log full error server-side but never leak details to client
  console.error('[unhandled error]', err);
  return res.status(500).json({ ok: false, error: 'Internal server error' });
}