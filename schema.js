
export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String! # this is required,
        country: String # this is not required 
        platform:[String!]!
    }
    type Review{
        id: ID!
        rating: Int!
        content:String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query{
        reviews:[Review]
        games:[Game]
        authors:[Author]
    }
`

// Datatypes: int, float, string, boolean, ID