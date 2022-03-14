import {
    ApolloClient,
    gql
} from '@apollo/client';
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://syn-api-prod.herokuapp.com/graphql',
    headers: {
        "authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});

export const GET_TASKS = gql`
    query getTasks($input: FilterTaskInput!) {
        tasks(input: $input){
            id,
            name,
            tags,
            pointEstimate,
            status,
            dueDate,
            assignee {
              avatar
            }
        }
    }
`;