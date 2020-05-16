import mongoose from 'mongoose';

const IPLocation = new mongoose.Schema(
  {
    ip: 'string',
    city: 'string',
    region: 'string',
    region_code: 'string',
    country: 'string',
    country_code: 'string',
    country_code_iso3: 'string',
    country_capital: 'string',
    country_tld: 'string',
    country_name: 'string',
    continent_code: 'string',
    in_eu: false,
    postal: 'string',
    latitude: 'string',
    longitude: 'string',
    timezone: 'string',
    utc_offset: 'string',
    country_calling_code: 'string',
    currency: 'string',
    currency_name: 'string',
    languages: 'string',
    country_area: Number,
    country_population: Number,
    message: 'string',
    asn: 'string',
    org: 'string',
  },
  { timestamps: true },
);

export default mongoose.model('IPLocation', IPLocation);
