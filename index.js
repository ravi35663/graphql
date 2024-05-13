import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
//  Types
import { typeDefs } from './schema.js';
// db
import _db from './_db.js';

const resolvers = {
    Query:{
        reviews(){
            return _db.reviews
        },
        review(parent,args){
            return _db.reviews.find(review=> review.id === args.id)
        },
        authors(){
            return _db.authors
        },
        author(parent,args){
            return _db.authors.find(author=> author.id == args.id)
        },
        games(){
            return _db.games;
        },
        game(parent,args){
            return _db.games.find(game=> game.id == args.id)
        }
    }
}

// server setup
const server = new ApolloServer({
    // typeDefs => which type of schema (definition of type of data like author have name,age ..etc)
    typeDefs,
    // resolvers
    resolvers 
});

const port = 4000;
const {url} = await startStandaloneServer(server,{
    listen:{
        port
    }
})
console.log("Server running at port : ",port)
console.log("url: ",url);