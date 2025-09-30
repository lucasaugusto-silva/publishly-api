/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

let path = process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev';

const { parsed } = dotenv.config({ path });
for (const key in parsed) process.env[key] = parsed[key];
