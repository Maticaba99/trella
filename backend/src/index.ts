// Dependencies
import cors from 'cors';
import express from 'express';

// Apollo
import { ApolloServer } from 'apollo-server-express';
import { serverConfig } from './apollo';

export function init() {
  const app = express();

  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer(serverConfig);
  apolloServer.applyMiddleware({ app });

  return app;
}

const PORT = process.env.PORT || 3030;

if (require.main === module) {
  init().listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
} else {
  // required as a module => executed on aws lambda
}
