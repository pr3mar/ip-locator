import { Router } from 'express';
import { loadModels, saveModel } from '../../services/locatorService';

const route = Router();

export default (app) => {
  app.use(route);

  route.get('/', async (req, res) => {
    try {
      const models = await loadModels();
      return res.json({ models }).status(200);
    } catch (e) {
      console.log(e);
      return res.json({}).status(500);
    }
  });

  route.get('/create', async (req, res) => {
    // const content = 'HelloWorld!';
    try {
      const models = await saveModel({
        ip: '8.8.8.8',
        city: 'Mountain View',
        region: 'California',
        region_code: 'CA',
        country: 'US',
        country_code: 'US',
        country_code_iso3: 'USA',
        country_capital: 'Washington',
        country_tld: '.us',
        country_name: 'United States',
        continent_code: 'NA',
        in_eu: false,
        postal: 'Sign up to access',
        latitude: 'Sign up to access',
        longitude: 'Sign up to access',
        timezone: 'America/Los_Angeles',
        utc_offset: '-0700',
        country_calling_code: '+1',
        currency: 'USD',
        currency_name: 'Dollar',
        languages: 'en-US,es-US,haw,fr',
        country_area: 9629091.0,
        country_population: 310232863.0,
        message: 'Please message us at ipapi.co/trial for full access',
        asn: 'AS15169',
        org: 'GOOGLE',
      });
      return res.json({ models }).status(200);
    } catch (e) {
      console.log(e);
      return res.json({}).status(500);
    }
  });
};
