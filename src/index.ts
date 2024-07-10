import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { AddressBookResolver } from './presentation/resolvers/AddressBookResolver';
import logger from './utils/LoggerFactory';

async function startServer() {
  const schema = await buildSchema({
    resolvers: [AddressBookResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  logger.info(`Server is running at ${url}`);
}

startServer();
