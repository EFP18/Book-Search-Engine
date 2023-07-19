const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    # array of Book types (like a subschema)
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    # KEY-TOKEN(json webtoken), value-userjson data from User
    token: ID
    user: User
  }

# Ester: {
#   "token": "f2f224rf32d2fd5243",
#   "user": {
#     "username": "ester",
#     "email": "email.com"
#   }
# }
input bookInput {
  # let react take those in as inputs 
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query {
  # when data is returned from mongodb, format it like a User type
  me: User 
}

type Mutation {
  # when adduser is run, the json data being returned will have the auth format
  addUser(username: String, email: String, password: String):Auth
  login(email: String, password: String):Auth
  # return version of user with new updated array (saveBook)
  saveBook(bookData:bookInput):User
  # when we remove the book, it updates the user and the updated data 
  removeBook(bookId: ID):User
}
`
module.exports = typeDefs;