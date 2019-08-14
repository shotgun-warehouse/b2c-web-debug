import React from 'react';
import cookie from 'cookie';
import Head from 'next/head';
import { isBrowser } from '../isBrowser';
import initApollo from './initApollo';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { renderToString } from 'react-dom/server';
import { getMarkupFromTree } from 'react-apollo-hooks';

export const parseCookies = (req?: any, options = {}) => {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options,
  );
};

// See https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/with-apollo-client.js
export default (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;

    static async getInitialProps(ctx: any) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;
      const apollo = initApollo(
        {},
        {
          getToken: () => parseCookies(req).token,
        },
      );

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          // This one is required for Apollo hooks to work!
          // See https://github.com/trojanowski/react-apollo-hooks/issues/52
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            ),
          });
          /*
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
          );
          */
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token;
        },
      });
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
