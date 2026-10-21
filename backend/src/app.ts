import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import contactRoutes from './routes/contact.routes.js';
import healthRoutes from './routes/health.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

export function createApp() {
  const app = express();
  app.set('trust proxy', 1);
  app.use(helmet());
  
  // Allow any localhost port during dev, plus the configured origin for production
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || origin.startsWith('http://localhost:') || origin === env.CORS_ORIGIN) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: false,
    })
  );

  app.use(express.json({ limit: '25kb' }));

  app.use('/api', healthRoutes);
  app.use('/api', contactRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}