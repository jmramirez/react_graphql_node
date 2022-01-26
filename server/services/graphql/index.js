import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const executableSchema = makeExecutableSchema({});

const server = new ApolloServer({
  schema: executableSchema,
  context: ({ req }) => req,
});

export default server;
