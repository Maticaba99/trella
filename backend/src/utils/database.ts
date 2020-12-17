import { connect } from 'mongoose';
import { config } from './config';

let databaseConnection = false;

export function connectMongo() {
  if (databaseConnection) {
    console.log('Database connected from cache');
    return true;
  }

  try {
    connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      dbName: config.MONGO_DATABASE,
    });
    databaseConnection = true;
    console.log('MongoDB is connected');
    return true;
  } catch (err) {
    console.log('ERROR: Could not connect to mongoDB', err);
    return false;
  }
}
