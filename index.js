import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'


// server setup
const server = new ApolloServer({
    // typeDefs => which type of schema 
    // resolvers 
});

const port = 4000;
const {url} = await startStandaloneServer(server,{
    listen:{
        port
    }
})
console.log("Server running at port : ",port)