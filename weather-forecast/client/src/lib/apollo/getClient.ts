import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { GRAPHQL_API_URL } from "@/constants/navigation/api_url";

export const { getClient } = registerApolloClient(() => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_API_URL,
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
});
