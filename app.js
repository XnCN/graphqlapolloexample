const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const db = require("./data");

const resolvers = {};

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers: require("./graphql/resolvers"),
  context: {
    db,
  },
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
