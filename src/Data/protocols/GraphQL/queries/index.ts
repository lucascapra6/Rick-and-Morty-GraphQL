import {gql} from '@apollo/client';

export const CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: {name: $name}) {
      info {
        count
        next
      }
      results {
        id
        name
        image
        status
        gender
        species
      }
    }
  }
`;

export const CHARACTER_DETAILS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      type
      species
      status
      episode {
        id
        name
        air_date
      }
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

