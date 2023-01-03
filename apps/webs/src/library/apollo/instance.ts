import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import { IncomingHttpHeaders } from "http";
import fetch from "isomorphic-unfetch";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs ref
 * @notes [ ]
 *
 */
export const apolloInstance = (headers?: IncomingHttpHeaders | null) => {
  const enhancedFetch = async (url: RequestInfo, init: RequestInit) => {
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        "Access-Control-Allow-Origin": "*",
        Cookie: headers?.cookie ?? "",
      },
    });
    return response;
  };

  const uri = process.env.GRAPH_URI;

  if (!uri) {
    throw new Error(`** GRAPH_URI **`);
  }

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message: msg }) => {
            console.log(`Error: ${msg}`);
          });
        }

        if (networkError) {
          console.log(`Network error.`);
        }
      }),

      createUploadLink({
        uri,
        fetchOptions: {
          mode: "cors",
        },
        credentials: "include",
        fetch: enhancedFetch,
      }),
    ]),
    cache: new InMemoryCache(),
  });
};
