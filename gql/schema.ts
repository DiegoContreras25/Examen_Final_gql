// The GraphQL schema
export const typeDefs = `#graphql

  type contact {
   nombre: String!
   telefono: String!
   
  }

  type Query {
    getContacts: [contact!]!
    getContact(id: ID!): contact!
    
  }
  type Mutation {
    addContact(nombre: String!, telefono: String!): contact!
    deleteContact(id: ID!): contact!
    updateContact(id: ID!, nombre: String!, telefono: String!): contact!
    
  }
`;
