import { Router } from 'express';

const route = Router();

export default (app) => {
  app.use(route);
  route.get('/', (req, res) => {
    const content = 'HelloWorld!';
    return res.json({ content }).status(200);
  });
};
