import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { AddressBookResolver } from './resolvers/AddressResolver';

async function startServer() {
  const schema = await buildSchema({
    resolvers: [AddressBookResolver]
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server is running at ${url}`);
}

startServer();
