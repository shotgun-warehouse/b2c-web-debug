/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Icon as FeatherIcon } from 'react-feather';

// TODO remove after Typescript support added https://github.com/styled-system/styled-system/issues/463
// @ts-ignore
import { layout } from 'styled-system';
// @ts-ignore
import { shadow, typography, get } from 'styled-system';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  WidthProps,
  HeightProps,
  border,
  BorderRadiusProps,
  BorderWidthProps,
  BorderColorProps,
  BoxShadowProps,
  FontSizeProps,
  FontWeightProps,
} from 'styled-system';
import { Row } from './Layout';
import baseTheme from 'styles/theme';
import Loader from './Loader';
import Icon from 'components/base/Icon';

const ButtonLoader = ({ loading }: { loading?: boolean }) => (
  <div
    style={{
      position: 'absolute',
      zIndex: 1,
      opacity: loading ? 1 : 0, // ENHANCEMENT animate spinner enter/leave?
      width: '100%',
      flex: 1,
    }}
  >
    <Loader />
  </div>
);

const hoverStyle = ({ hoverColor }: ButtonProps) =>
  hoverColor
    ? css`
        &:hover {
          color: ${get(baseTheme.colors, hoverColor)};
          outline: none;
        }
        -webkit-transition: color 0.2s ease-in;
        -moz-transition: color 0.2s ease-in;
        -o-transition: color 0.2s ease-in;
        transition: color 0.2s ease-in;
      `
    : undefined;

// ENHANCEMENT: refactor with Layout gradient style?
const gradientStyle = ({ gradient }: CTAButtonProps) =>
  css`
    background-image: ${gradient
      ? `linear-gradient(to right, ${get(
          baseTheme.colors,
          gradient[0],
        )} , ${get(baseTheme.colors, gradient[1])})`
      : undefined};
  `;

export const disabledStyle = ({ disabled }: ButtonProps) =>
  disabled
    ? css`
        opacity: 0.4;
        cursor: not-allowed;
      `
    : undefined;

type ButtonProps = ColorProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  BorderRadiusProps &
  BorderWidthProps &
  BorderColorProps &
  BoxShadowProps &
  FontSizeProps &
  FontWeightProps &
  React.HTMLAttributes<HTMLButtonElement> & {
    gradient?: string[];
    hoverColor?: string;
    disabled?: boolean;
  };

// Default Button
const Button = styled.button<ButtonProps>`
  cursor: pointer;
  ${color}
  ${space}
  ${border}
  ${shadow}
  ${layout}
  ${typography}
  ${gradientStyle}
  ${hoverStyle}
  ${disabledStyle}
`;

Button.defaultProps = {
  bg: 'transparent',
  color: 'blues.deepSky',
  fontWeight: 1,
  borderWidth: 0,
  borderRadius: 1,
  borderColor: 'inherit',
};
export default Button;

export const PrimaryButton = ({
  color = 'black',
  hoverColor = 'pinks.barbie',
  onClick,
  disabled,
  ...props
}: ButtonProps) => (
  <Button
    color={color}
    hoverColor={hoverColor}
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
    {...props}
  />
);

// TODO refactor with CTAButton for icons
interface ButtonWithIconProps extends ButtonProps {
  leftIcon?: FeatherIcon;
  rightIcon?: FeatherIcon;
  iconSize?: number;
}
export const ButtonWithIcon = ({
  leftIcon,
  rightIcon,
  children,
  iconSize = 2,
  ...props
}: ButtonWithIconProps) => (
  <PrimaryButton {...props}>
    <Row style={{ position: 'relative' }} justifyContent="center">
      <Row justifyContent="center">
        {leftIcon && (
          <Icon icon={leftIcon} mr="2" color={'inherit'} size={iconSize} />
        )}
        {children}
        {rightIcon && (
          <Icon icon={rightIcon} ml="2" color={'inherit'} size={iconSize} />
        )}
      </Row>
    </Row>
  </PrimaryButton>
);

// Call-To-Action Button
export interface CTAButtonProps extends ButtonProps {
  leftIcon?: FeatherIcon;
  rightIcon?: FeatherIcon;
  loading?: boolean;
}
export const CTAButton = ({
  p = 3,
  borderRadius = 1,
  bg = 'pinks.hot',
  color = 'white',
  width = '100%',
  gradient,
  leftIcon,
  rightIcon,
  loading,
  onClick,
  disabled,
  children,
  ...props
}: CTAButtonProps) => (
  <Button
    p={p}
    borderRadius={borderRadius}
    bg={bg}
    width={width}
    color={color}
    gradient={gradient}
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
    {...props}
  >
    <Row style={{ position: 'relative' }} justifyContent="center">
      <Row justifyContent="center" style={{ opacity: loading ? 0 : 1 }}>
        {leftIcon && <Icon icon={leftIcon} mr="2" color={'inherit'} size={2} />}
        {children}
        {rightIcon && (
          <Icon icon={rightIcon} ml="2" color={'inherit'} size={2} />
        )}
      </Row>
      <ButtonLoader loading={loading} />
    </Row>
  </Button>
);

// Rounded Button
interface RoundButtonProps extends ButtonProps {
  size?: number;
  children: ReactNode;
}

export const RoundButton = ({
  size = 3,
  children,
  ...props
}: RoundButtonProps) => (
  <CTAButton width={size} height={size} borderRadius={size} p={0} {...props}>
    {children}
  </CTAButton>
);
