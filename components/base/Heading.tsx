import styled from '@emotion/styled';

// TODO remove after Typescript support added https://github.com/styled-system/styled-system/issues/463
// @ts-ignore
import { typography, layout } from 'styled-system';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  FontWeightProps,
  FontSizeProps,
  DisplayProps,
  TextAlignProps,
} from 'styled-system';

type HeadingProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  FontWeightProps &
  DisplayProps &
  TextAlignProps &
  React.HTMLProps<HTMLHeadingElement>;

const Heading = styled.h1<HeadingProps>`
  ${color}
  ${space}
  ${typography}
  ${layout}
`;

Heading.defaultProps = {
  fontSize: [2, 2, 3],
  fontWeight: 2,
};

export default Heading;
