const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
  // our query instance, holds the classes and returns the result
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
        // uses find({}) to return all classes upon req
        // resolvers go and get the data the type defs just define the data
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
