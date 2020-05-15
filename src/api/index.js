import { Router } from 'express';
import indexRouter from './routes/index';

export default () => {
  const app = Router();
  indexRouter(app);

  return app;
};
