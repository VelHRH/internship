import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import * as SecureStore from "expo-secure-store";
import { createClient } from "graphql-ws";

const httpLink = createHttpLink({
  uri: process.env.EXPO_PUBLIC_API_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.EXPO_PUBLIC_WS_URL!,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext(async (_, { headers }) => {
  const session = await SecureStore.getItemAsync("session");
  return {
    headers: {
      ...headers,
      authorization: session ? `Bearer ${JSON.parse(session).accesstoken}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([errorLink, authLink, splitLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          locations: {
            merge(existing = [], incoming: unknown[]) {
              return incoming;
            },
          },
        },
      },
      GetUserResponse: {
        fields: {
          locations: {
            merge(existing = [], incoming: unknown[]) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
