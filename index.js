import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import { typeDefs } from './schema';

// server setup
const server = new ApolloServer({
    // typeDefs => which type of schema (definition of type of data like author have name,age ..etc)
    typeDefs,
    // resolvers 
});

const port = 4000;
const {url} = await startStandaloneServer(server,{
    listen:{
        port
    }
})
console.log("Server running at port : ",port)