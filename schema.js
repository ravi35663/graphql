
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
        reviews:[Review] # to see all reviews in array
        review(id:ID!): Review # to see single review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }
`

// Datatypes: int, float, string, boolean, ID