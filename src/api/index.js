import { Router } from 'express';
import statusRoute from './routes/status';
import userRoute from './routes/tokenGeneration';

export default () => {
  const app = Router();
  statusRoute(app);
  userRoute(app);
  return app;
};
