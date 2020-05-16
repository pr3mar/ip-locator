const got = require('got');

const ipLocationProviderURL = 'https://ipapi.co/';
const format = 'json';

async function getIPLocation(ip) {
  const URL = `${ipLocationProviderURL}${ip}/${format}`;
  console.log(`Getting ${URL}`);
  const ipLocation = await got(URL).json();
  return ipLocation;
}

export default getIPLocation;
