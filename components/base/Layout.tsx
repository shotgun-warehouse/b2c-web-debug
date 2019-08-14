/** @jsx jsx */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import baseTheme from 'styles/theme';
// @ts-ignore
import { flexbox, layout, FlexGrowProps, typography, get } from 'styled-system';
// @ts-ignore
import { shadow } from 'styled-system';
import {
  color,
  BackgroundColorProps,
  space,
  MarginProps,
  SpaceProps,
  FlexDirectionProps,
  JustifyContentProps,
  AlignItemsProps,
  WidthProps,
  HeightProps,
  MinHeightProps,
  DisplayProps,
  border,
  BorderRadiusProps,
  position,
  RightProps,
  TopProps,
  LeftProps,
  BottomProps,
  TextAlignProps,
  BoxShadowProps,
  MaxWidthProps,
  ZIndexProps,
} from 'styled-system';

const flexStyle = css`
  display: flex;
`;

type AnimationProps = {
  animatedProperty?: string;
};

type GradientProps = {
  direction?: 'to bottom' | 'to top' | 'to left' | 'to right';
  colors: string[];
};
type BackgroundImageProps = {
  backgroundImage?: {
    src?: string;
    gradient?: GradientProps;
  };
};

type FlexProps = FlexDirectionProps &
  JustifyContentProps &
  AlignItemsProps &
  MarginProps &
  BackgroundColorProps &
  WidthProps &
  HeightProps &
  MinHeightProps &
  SpaceProps &
  DisplayProps &
  RightProps &
  LeftProps &
  TopProps &
  BottomProps &
  BorderRadiusProps &
  FlexGrowProps &
  AnimationProps &
  BackgroundImageProps &
  TextAlignProps &
  BoxShadowProps;

// Background image with image source and/or gradient
const backgroundImageStyle = ({ backgroundImage }: FlexProps) =>
  backgroundImage
    ? css`
        background-image: ${backgroundImage.gradient
            ? backgroundImageGradient(backgroundImage.gradient)
            : ''}
          url(${backgroundImage.src});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      `
    : undefined;

const backgroundImageGradient = (gradient: GradientProps) =>
  `linear-gradient(${gradient.direction || 'to bottom'},${get(
    baseTheme.colors,
    gradient.colors[0],
  )},${get(baseTheme.colors, gradient.colors[1])}), `;

// Animate flex property, such as layout or colors
const transitionStyle = ({ animatedProperty }: FlexProps) =>
  css`
    -webkit-transition: ${animatedProperty} 0.25s ease-in;
    -moz-transition: ${animatedProperty} 0.25s ease-in;
    -o-transition: ${animatedProperty} 0.25s ease-in;
    transition: ${animatedProperty} 0.25s ease-in;
  `;

export const Flex = styled.div<FlexProps>`
  ${flexStyle}
  ${flexbox}
  ${color}
  ${shadow}
  ${layout}
  ${space}
  ${border}
  ${position}
  ${transitionStyle}
  ${backgroundImageStyle}
  ${typography}
`;

export const Row = styled(Flex)<FlexProps>`
  flex-direction: row;
`;

Row.defaultProps = {
  alignItems: 'center',
};

export const Column = styled(Flex)<FlexProps>`
  flex-direction: column;
`;

export const Centered = styled(Flex)<FlexProps>`
  justify-content: center;
  align-items: center;
`;

export const Line = styled(Flex)<FlexProps>`
  width: 100%;
  height: 1px;
`;

export const LineVertical = styled(Flex)<FlexProps>`
  height: 100%;
  width: 1px;
`;

// Section background
export const Background = styled(Flex)<FlexProps>`
  & ~ div {
    z-index: 1;
  }
  position: absolute;
  left: -20vw;
  bottom: 0;
  top: 0;
  width: 120vw;
`;

// Flex covering whole window
export const windowOverlayStyle = css`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const WindowOverlay = styled(Flex)<FlexProps>`
  ${windowOverlayStyle}
`;

// Flex covering one div
export const CardOverlay = styled(Column)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

type ContentProps = BackgroundColorProps & SpaceProps;
export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${color}
  ${space}
`;

type MainProps = MarginProps & SpaceProps & MaxWidthProps & ZIndexProps;
export const Main = styled.div<MainProps>`
  flex-grow: 1;
  ${space}
  ${layout}
  ${position}
`;
