import {
    ApolloClient,
    gql,
    useMutation,
    useQuery,
    InMemoryCache
} from '@apollo/client';

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

const CREATE_TASK = gql`
    mutation createTask($input: CreateTaskInput!) {
        createTask(input: $input) {
            name
            tags
            status
            pointEstimate
            dueDate
            assignee {
                avatar
            }
        }
    }
`;

const DELETE_TASK = gql`
    mutation deleteTask($input: DeleteTaskInput!){
        deleteTask(input: $input) {
            id
        }
    }
`;

const GET_USERS = gql`
    query Users {
        users {
            id,
            fullName,
            avatar
        }
    }
`;

export function GetUsers() {
    return useQuery(GET_USERS, {
        client: client
    });
}

export function CreateTask(createTaskBody) {
    return useMutation(CREATE_TASK, {
        variables: { input: createTaskBody },
        client: client
    })
}

export function DeleteTask(deleteTaskBody) {
    return useMutation(DELETE_TASK, {
        variables: { input: deleteTaskBody },
        client: client
    })
}