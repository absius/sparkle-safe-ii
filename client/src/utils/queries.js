import { gql } from "@apollo/client";

export const QUERY_JEWELRY_ITEM = gql`
  query getJewelry($jewelry: ID) {
    jewelry(description: $description) {
      _id
      jewelryName
      description
      jewelryPrice
      assessedValue
      jewelryAssessor
      purchaseDate
      jewelryWarranty
      receiptPhoto
      createdAt
    }
  }
`;

export const QUERY_JEWELRY_LIST = gql`
  {
    jewelry {
      _id
      jewelryName
      description
      jewelryPrice
      assessedValue
      jewelryAssessor
      purchaseDate
      jewelryWarranty
      receiptPhoto
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      jewelry {
        _id
        jewelryName
        description
        jewelryPrice
        assessedValue
        jewelryAssessor
        purchaseDate
        jewelryWarranty
        receiptPhoto
        createdAt
      }
    }
  }
`;
