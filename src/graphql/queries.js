/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPark = /* GraphQL */ `
  query GetPark($id: ID!) {
    getPark(id: $id) {
      id
      name
      description
      author
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listParks = /* GraphQL */ `
  query ListParks(
    $filter: ModelParkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        author
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
