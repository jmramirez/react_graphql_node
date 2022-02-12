import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client'
import {onError} from "@apollo/client/link/error";

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if(graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
                if(networkError) {
                    console.log(`[Network error]: ${networkError}`);
                }
            }
        }),
        new HttpLink({
            uri: 'http://localhost:8080/graphql',
        })
    ]),
    cache: new InMemoryCache()
})

export default client;