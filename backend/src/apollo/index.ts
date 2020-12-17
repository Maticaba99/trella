import { ApolloServerExpressConfig } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import { context } from './context';
import { resolvers } from '../graphql/resolvers';

const typeDefs = importSchema('./src/graphql/schema.graphql');

export const serverConfig: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  context,
};
