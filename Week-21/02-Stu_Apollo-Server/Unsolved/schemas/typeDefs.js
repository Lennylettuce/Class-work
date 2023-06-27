const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
    # builds type of Class of data you can make req upon
      # this describes the Models directory
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
    # builds the models with your data types/type definitions
      # defines Query type with entry points, tells gql where to grab data
       #[] expect array of Class(es)
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
