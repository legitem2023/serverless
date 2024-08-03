import { ApolloClient,InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";


// const router = useRouter();


// let pathName = router.pathname;

console.log(useRouter)
const apolloClient = new ApolloClient({
    uri:'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient