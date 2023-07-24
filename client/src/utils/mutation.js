import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        bookCount
        email
        password
        username
        savedBooks {
          link
          title
          image
          description
          bookId
          authors
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        savedBooks {
          title
          link
          image
          description
          bookId
          authors
        }
        bookCount
        email
        password
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($bookData: bookInput) {
    saveBook(bookData: $bookData) {
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

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      bookCount
      email
      password
      username
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
      }
    }
  }
`;
