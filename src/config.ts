import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

const {
  PORT,
  NODE_ENV,
  POSTGRES_Host,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export default {
  port: PORT,
  host: POSTGRES_Host,
  dbPort: POSTGRES_PORT,
  database: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
};
