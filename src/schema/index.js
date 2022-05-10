const { gql } = require("apollo-server");

const { Image, ImageResponse } = require("./image");
const User = require("./user");

let Query = gql`
  type Query {
    getPhotos(page: Int!, perPage: Int!): [ImageResponse!]!
    searchPhotos(
      query: String!
      page: Int!
      perPage: Int!
      orientation: String!
    ): [ImageResponse]!
    fetchImage(photoId: String): ImageResponse
    getUserDetails(username: String): User
    getUserPhotos(
      username: String
      page: Int!
      perPage: Int!
      orientation: String!
    ): [ImageResponse!]!
  }
`;

module.exports = [Query, Image, ImageResponse, User];
