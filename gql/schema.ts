// The GraphQL schema
export const typeDefs = `#graphql

  type algo {
   name: String!
   algo: [algo!]
  }

  type Query {
    algo: [algo!]!
  }
  type Mutation {
    addalgo(name: String!): algo!
    deletealgo(id: ID!): algo!
    
  }
`;
