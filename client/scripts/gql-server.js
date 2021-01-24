const fs = require("fs");
const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema,
        addMockFunctionsToSchema } = require("graphql-tools");


const schemaFile = path.join(__dirname, "../model/civic.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf8");

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema: schema });

var app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/api");
