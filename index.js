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
        authors(){
            return _db.authors
        },
        games(){
            return _db.games;
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