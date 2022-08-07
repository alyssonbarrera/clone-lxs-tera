import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.API_URL,
    headers: {
        'Authorization': `Bearer ${process.env.API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()
})

export default client;