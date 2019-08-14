import { NormalizedCacheObject } from 'apollo-boost';
// TODO temporary workaround for https://github.com/apollographql/apollo-client/issues/4843
// TODO upgrade apollo-boost and remove this hacky import
import { ApolloClient, InMemoryCache } from 'apollo-boost/lib/index';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import fetch from 'isomorphic-unfetch';
import { isBrowser } from '../isBrowser';
import { createAuthTokenHeaderEntry } from 'lib/auth';

// See https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js
let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

interface Options {
  getToken: () => string | undefined;
  fetchOptions?: any;
}

function create(initialState: any, { getToken, fetchOptions }: Options) {
  const httpLink = createHttpLink({
    uri: `${process.env.API_URL}/graphql`,
    // credentials: 'include', // TODO maybe need to re-enable for auth, but disabled to avoir CORS issues
    fetchOptions,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        ...createAuthTokenHeaderEntry(token),
      },
    };
  });

  const onErrorLink = onError(
    ({ networkError, graphQLErrors, operation, response }) => {
      if (graphQLErrors && graphQLErrors.length) {
        console.debug(
          '%cNOK: graphql errors',
          graphQLErrors,
          operation,
          response,
        );
      }
      if (networkError) {
        console.log('network error', { operation, response });
      }
    },
  );

  const link = ApolloLink.from([authLink, onErrorLink, httpLink]);

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: link,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    let fetchOptions = {};
    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    /*
    if (process.env.https_proxy) {
      fetchOptions = {
        agent: new (require('https-proxy-agent'))(process.env.https_proxy),
      };
    }
    */
    return create(initialState, {
      ...options,
      fetchOptions,
    });
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
