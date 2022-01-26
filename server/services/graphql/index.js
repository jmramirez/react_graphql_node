import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import Schema from './schema';
import Resolver from './resolver';

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolver,
});

const server = new ApolloServer({
  schema: executableSchema,
  context: ({ req }) => req,
});

export default server;
