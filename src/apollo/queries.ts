import gql from "graphql-tag";

export const SEARCH_COUNTRIES = gql`
  query {
    countries {
      name
      code
      currency
      capital
      continent {
        name
        code
      }
      emoji
      languages {
        name
        code
      }
    }
  }
`;
