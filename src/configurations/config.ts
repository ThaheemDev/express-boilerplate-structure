import * as dotenv from 'dotenv';
dotenv.config();

/**
 * MongoDB connection options.
 */
const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

/**
 * MongoDB username.
 */
const MONGO_USERNAME = process.env.MONGO_USERNAME || '';

/**
 * MongoDB password.
 */
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';

/**
 * MongoDB host URL.
 */
const MONGO_HOST =
  process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/development';

/**
 * MongoDB configuration object.
 */
const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url:
    MONGO_USERNAME !== '' && MONGO_PASSWORD !== ''
      ? `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
      : `${MONGO_HOST}`,
};

/**
 * Server hostname.
 */
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

/**
 * Server port.
 */
const SERVER_PORT = process.env.SERVER_PORT || 4000;

/**
 * Server configuration object.
 */
const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

/**
 * API prefix.
 */
const API = {
  prefix: process.env.API_PREFIX || '/api',
};

/**
 * Token issuer.
 */
const token_issuer = process.env.TOKEN_ISSUER || '';

/**
 * Configuration object.
 */
const config = {
  mongo: MONGO,
  server: SERVER,
  api: API,
  aws_parameters: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    bucket: process.env.BUCKET,
  },
  token_issuer,
};

export default config;
