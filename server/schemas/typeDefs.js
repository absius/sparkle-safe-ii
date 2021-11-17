const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Jewelry {
    _id: ID
    jewelryName: String
    description: String
    jewelryPrice: String
    assessedValue: String
    jewelryAssessor: String
    purchasedDate: String
    jewelryWarranty: String
    serviceDate: String
    jewelryPhoto: String
    receiptPhoto: String

   
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    jewelryList: [Jewelry]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    removeJewelry(jewelryId: ID!): User
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateJewelry(_id: ID!, quantity: Int!): Jewelry
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
