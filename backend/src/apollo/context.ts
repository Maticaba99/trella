import { connectMongo } from '../utils/database';

// interface Context

export const context = async () => {
  await connectMongo();
  // isAuth > For the future
};
