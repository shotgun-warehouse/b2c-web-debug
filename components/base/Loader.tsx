import React from 'react';
// https://www.react-spinners.com/
import { ClipLoader } from 'react-spinners';
import { get } from 'styled-system';
import baseTheme from 'styles/theme';
import { Centered } from './Layout';

const Loader = ({
  size = 4,
  color = 'white',
}: {
  size?: number;
  color?: string;
}) => (
  <Centered width="100%" height="100%">
    <ClipLoader
      color={get(baseTheme.colors, color)}
      size={get(baseTheme.sizes, size)}
    />
  </Centered>
);

export default Loader;
