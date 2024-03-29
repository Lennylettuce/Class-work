const express = require('express');
// TODO: Add a comment describing the functionality of this expression
  // create instance of apollo and require it so express knows what to use
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
  // tell express to search for these files in the schemas
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
  // async function that takes in the schemas and uses the applyMiddleware method to connect server(apollo) to app(express)
    //start() only use if you're usin middleware integration, always call BEFORE middleware methods 
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
  // call the async function to
startApolloServer(typeDefs, resolvers);
