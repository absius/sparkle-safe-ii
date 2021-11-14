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

  type Order {
    _id: ID
    purchaseDate: String
    jewelryList: [Jewelry]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
 
    jewelryList(_id:ID!, name: String): [Jewelry]
    jewelry(_id: ID!): Jewelry
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateJewelry(_id: ID!, quantity: Int!): Jewelry
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
