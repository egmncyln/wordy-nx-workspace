import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: ['http://localhost:4200'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
};
