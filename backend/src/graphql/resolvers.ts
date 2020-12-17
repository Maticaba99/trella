import { taskMutations, taskQueries } from '../controllers/tasks/resolvers';

export const resolvers = {
  Query: {
    ...taskQueries,
  },
  Mutation: {
    ...taskMutations,
  },
};
