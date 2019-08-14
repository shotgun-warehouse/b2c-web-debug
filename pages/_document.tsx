import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core';
import normalize from '../styles/normalize';
import base from '../styles/base';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global
          styles={css`
            ${normalize};
            ${base};
          `}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
