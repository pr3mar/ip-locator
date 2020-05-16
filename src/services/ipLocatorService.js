import mongoose from 'mongoose';
import dotenv from 'dotenv';
import getIPLocation from './ipScraperService';
import IPLocation from '../models/IPLocation';
import InvalidIPException from '../exceptions/InvalidIPException';
import IPLocationNotFound from '../exceptions/IPLocationNotFound';
import validateIpAddress from './ipValidatorService';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


async function getIP(providedIps) {
  // if X-Forwarded-For is used we need to take the first element from the list
  const ip = providedIps.split(',')[0].trim();
  if (!validateIpAddress(ip)) {
    throw new InvalidIPException('The provided IP is not valid.');
  }

  const found = await IPLocation.findOne({ ip });

  if (found != null) {
    return found;
  }

  const ipLocation = await getIPLocation(ip);
  console.log(`Found location: ${ipLocation}`);

  if (ipLocation != null) {
    const storedLocation = await IPLocation.create(ipLocation);
    return storedLocation;
  }

  throw new IPLocationNotFound('IP location not found');
}

export default getIP;
