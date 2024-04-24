import { knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const knexConfig = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URL,
});

export default knexConfig;
