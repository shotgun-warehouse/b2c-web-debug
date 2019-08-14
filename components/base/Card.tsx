/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import styled from '@emotion/styled';

// TODO remove after Typescript support added https://github.com/styled-system/styled-system/issues/463
// @ts-ignore
import { shadow, layout, get } from 'styled-system';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  border,
  BorderRadiusProps,
  BoxShadowProps,
  WidthProps,
  DisplayProps,
} from 'styled-system';
import { OnClickListener } from 'AppTypes';
import baseTheme from 'styles/theme';
import { disabledStyle } from './Button';

type CardProps = ColorProps &
  SpaceProps &
  BorderRadiusProps &
  BoxShadowProps &
  WidthProps &
  DisplayProps &
  React.HTMLProps<HTMLDivElement> & {
    onClick?: OnClickListener;
    borderGradient?: string[];
  };

const touchableStyle = ({ onClick }: CardProps) =>
  onClick
    ? css`
        cursor: pointer;
      `
    : undefined;

const borderGradientStyle = ({ borderGradient }: CardProps) =>
  borderGradient
    ? css`
        position: relative;
        ::after {
          position: absolute;
          top: -1px;
          bottom: -1px;
          left: -1px;
          right: -1px;
          background: linear-gradient(
            to right,
            ${get(baseTheme.colors, borderGradient[0])},
            ${get(baseTheme.colors, borderGradient[1])}
          );
          content: '';
          z-index: -1;
          border-radius: inherit;
        }
      `
    : css``;

const StyledCard = styled.div<CardProps>`
  ${color}
  ${space}
  ${border}
  ${shadow}
  ${layout}
  ${borderGradientStyle}
  ${touchableStyle}
  ${disabledStyle}
`;

StyledCard.defaultProps = {
  p: 4,
  borderRadius: 2,
  bg: 'white',
  boxShadow: 'mediumBottom',
};

const Card = ({ disabled, onClick, ...props }: CardProps) => (
  <StyledCard
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
    {...props}
  />
);

export default Card;
