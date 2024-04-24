import mongoose from 'mongoose';
import DatabaseTypes from './dbTypes';
import models from 'db/mongo/models';
import MongoDatabase from './mongo/MongoDatabase';
import ApiError from 'errors/ApiError';
import RequestErrors from 'errors/requestErrors';
import dotenv from 'dotenv';
import PostgresDatabase from './postgres/PostgresDatabase';
import { DB, dbEntities } from './dbEntites';

dotenv.config();

const dbType = process.env.DB_TYPE;

let db = {} as DB;

switch (dbType) {
  case DatabaseTypes.MONGO:
    mongoose.connect(process.env.MONGO_URL!);

    dbEntities.forEach(dbEntity => {
      db[dbEntity] = new MongoDatabase(models[dbEntity]);
    });
    break;
  case DatabaseTypes.POSTGRES:
    dbEntities.forEach(dbEntity => {
      db[dbEntity] = new PostgresDatabase(dbEntity);
    });
    break;
  default:
    throw new ApiError(`${RequestErrors.INTERNAL.message}: ${dbType}`, RequestErrors.INTERNAL.code);
}

export default db;
