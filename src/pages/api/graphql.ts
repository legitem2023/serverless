import { ApolloServer } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { createContext } from '@/graphql/context';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';

import Cors from 'micro-cors';

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: {
    cache: new InMemoryLRUCache({ maxSize: 100 * 1024 * 1024 }), // 100 MB max size
  },
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }


  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
})

export const config = {
  api: {
    bodyParser: false,
  },
};
