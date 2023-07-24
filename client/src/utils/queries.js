import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query GET_ME {
    me {
      bookCount
      email
      password
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

