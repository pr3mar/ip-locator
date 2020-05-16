import { Router } from 'express';
import { generateToken } from '../middleware/auth';

const route = Router();

export default (app) => {
  app.use(route);
  route.post('/token', (req, res) => {
    const userSecret = req.body.secret;
    if (userSecret == null) {
      return res.json({ message: 'Insufficient info.' }).status(400);
    }
    const token = generateToken(userSecret);
    return res.json({ token });
  });
};
