import React, { SVGAttributes } from 'react';
import styled from '@emotion/styled';
import { Icon as FeatherIcon } from 'react-feather';
import { color, space, MarginProps, ColorProps, get } from 'styled-system';
import baseTheme from 'styles/theme';

// Feather icons interface
interface FeatherIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

// Custom icon component, to inject color and size from theme
interface BaseIconProps extends FeatherIconProps {
  icon: FeatherIcon;
}
const BaseIcon = ({
  icon,
  color = 'black',
  size = 3,
  ...props
}: BaseIconProps) =>
  React.createElement(icon, {
    color: get(baseTheme.colors, color),
    size: get(baseTheme.fontSizes, size),
    ...props,
  });

// Extends with styled-system to add spaces props
type IconProps = MarginProps & ColorProps & BaseIconProps;
const Icon = styled(BaseIcon)<IconProps>`
  flex: 0 0 auto;
  ${color}
  ${space}
`;

export default Icon;
