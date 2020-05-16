import { Router } from 'express';
import getIP from '../../services/ipLocatorService';
import { tokenAuthentication } from '../middleware/auth';
import InvalidIPException from '../../exceptions/InvalidIPException';
import IPLocationNotFound from '../../exceptions/IPLocationNotFound';

const route = Router();

export default (app) => {
  app.use(route);

  route.get('/status', tokenAuthentication, async (req, res) => {
    try {
      const providedIPs = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const ipLocation = await getIP(providedIPs);
      return res.json(ipLocation).status(200);
    } catch (e) {
      console.log(e);
      if (e instanceof InvalidIPException) {
        return res.json({ message: e.message }).status(400);
      }
      if (e instanceof IPLocationNotFound) {
        return res.json({ message: e.message }).status(404);
      }
      return res.json({ message: 'Internal Exception Occurred, please try again.' }).status(500);
    }
  });
};
