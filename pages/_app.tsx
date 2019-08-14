import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/apollo/withApollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';

class ShotgunApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <ApolloHooksProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloHooksProvider>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(ShotgunApp);
