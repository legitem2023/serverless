import { ApolloClient,InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri:'https://serverless-lyart-seven.vercel.app/api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient