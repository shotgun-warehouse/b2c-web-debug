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
  border,
  BorderRadiusProps,
  DisplayProps,
  TextAlignProps,
} from 'styled-system';
import Card from './Card';
import { Centered } from 'components/base/Layout';

type TextProps = ColorProps &
  SpaceProps &
  FontSizeProps &
  FontWeightProps &
  BorderRadiusProps &
  DisplayProps &
  TextAlignProps &
  React.HTMLProps<HTMLParagraphElement>;

const Text = styled.span<TextProps>`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${layout}
`;

Text.defaultProps = {
  fontWeight: 0,
  fontSize: [1, 2],
};

export default Text;

const AlertColorsMap = {
  warning: 'yellows.eggShell',
  info: 'blues.veryLight',
  success: 'greens.soft',
};
type AlertRole = 'warning' | 'info' | 'success';

export const Alert = ({
  role,
  mx,
  my,
  ...props
}: { role: AlertRole } & TextProps) => (
  <Card bg={AlertColorsMap[role]} p={3} mx={mx} my={my} boxShadow={'none'}>
    <Centered>
      <Text fontSize={1} color="blacks.50" {...props} textAlign="center" />
    </Centered>
  </Card>
);
