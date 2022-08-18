
"use strict";
const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = process.env.port || 3000;
const schema = buildSchema(`
  type Query {
    "Retorna un saludo al mundo"
    hello: String
  }
`);
const resolvers = {
  hello: () => {
    return "Hola Mundo";
  },
};
app.use(
  "/api",
  graphqlHTTP({ schema: schema, rootValue: resolvers, graphiql: true })
);
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
