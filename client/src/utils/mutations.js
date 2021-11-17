import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const SAVE_JEWELRY = gql`
  mutation saveJewelry($input: savedJewelry!) {
    saveJewelry(input: $input) {
      _id
      firstName
      lastName
      email
      jewelryList {
        
        jewelryName
        description
        jewelryPrice
        assessedValue
        jewelryAssessor
        purchasedDate
        jewelryWarranty
        serviceDate
      
      }
    }
  }
`;

export const REMOVE_JEWELRY = gql`
  mutation removeJewelry($jewelryId: ID!) {
    removeJewelry(jewelryId: $jewelryId) {
      _id
      firstName
      lastName
      email
      jewelryList {
        _id
        jewelryName
        description
        jewelryPrice
        assessedValue
        jewelryAssessor
        purchasedDate
        jewelryWarranty
        serviceDate
      
      }
      }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_JEWELRY = gql`
  mutation addJewelry(
    $jewelryName: String!
    $description: String!
    $jewelryPrice: String!
    $assessedValue: String
    $jewelryAssessor: String
    $assessedValue: String
    $purchasedDate: String
    $jewelryWarranty: String
    $serviceDate: String
    $jewelryPhoto: Object
  ) {
    addJewelry(
      jewelryName: $jewelryName
      description: $description
      jewelryPrice: $jewelryPrice
      assessedValue: $assessedValue
      jewelryAssessor: $jewelryAssessor
      assessedValue: $assessedValue
      purchasedDate: $purchasedDate
      jewelryWarranty: $jewelryWarranty
      serviceDate: $serviceDate
      jewelryPhoto: $jewelryPhoto
    ) {
      token
      user {
        _id
      }
    }
  }
`;
