import { addDecorator, configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions } from '@storybook/addon-console';
import { Global, css } from '@emotion/core';
import * as React from 'react';
import normalize from '../styles/normalize';
import base from '../styles/base';
import './mockNextRouter';
import theme from 'styles/theme';
import apolloStorybookDecorator from 'apollo-storybook-react';

import { AppColor } from '../enums/AppStyles';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Add custom background and dark theme
addParameters({
  options: {
    theme: themes.dark,
  },
  viewport: {},
  backgrounds: [
    { name: 'GreyLLL', value: AppColor.greyLLL, default: true },
    { name: 'GreyLL', value: AppColor.greyDLL },
    { name: 'GreyL', value: AppColor.greyDL },
    { name: 'Grey', value: AppColor.grey },
    { name: 'GreyD', value: AppColor.greyD },
    { name: 'GreyDD', value: AppColor.greyDD },
    { name: 'GreyDDD', value: AppColor.greyDDD },
  ],
});

// Add globals styles
const withGlobal = cb => (
  <React.Fragment>
    <Global
      styles={css`
        ${normalize};
        ${base};
      `}
    />
    {cb()}
  </React.Fragment>
);

// Add JSX exemple panel
addDecorator(jsxDecorator);

// Add accessibility panel
addDecorator(withA11y);

addDecorator(withGlobal);

addDecorator(withThemesProvider([theme]));

const typeDefs = `
  type Query {
    helloWorld: String
  }

  schema {
    query: Query
  }
`;

const mocks = {
  Query: () => {
    return {
      helloWorld: () => {
        return 'Hello from Apollo!!';
      },
    };
  },
};
addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  }),
);

setConsoleOptions({
  panelExclude: [],
});
configure(loadStories, module);
