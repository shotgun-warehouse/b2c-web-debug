/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import baseTheme from 'styles/theme';
import { Column, Row, Flex } from 'components/base/Layout';
import Text from 'components/base/Text';

// TODO remove after Typescript support added https://github.com/styled-system/styled-system/issues/463
// @ts-ignore
import { layout, BorderColorProps } from 'styled-system';
// @ts-ignore
import { shadow, typography } from 'styled-system';
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
  BoxShadowProps,
  FontSizeProps,
  FontWeightProps,
} from 'styled-system';

interface AppInputProps {
  required?: boolean;
  label?: string;
  rightButton?: ReactNode;
  subButton?: ReactNode;
}
export type InputProps = ColorProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  BorderRadiusProps &
  BorderColorProps &
  BorderWidthProps &
  FontSizeProps &
  FontWeightProps &
  BoxShadowProps &
  AppInputProps &
  React.HTMLProps<HTMLInputElement> & { hover?: boolean };

const hoverStyle = ({ hover }: InputProps) =>
  hover
    ? css`
        &:hover,
        &:focus {
          border: ${baseTheme.colors.blues.deepSky} 1px solid;
          outline: none;
        }
      `
    : undefined;

// @ts-ignore
const Input: React.FC<InputProps> = styled.input<InputProps>`
width: 100%;
transition: border 250ms ease-out;
border-width: 1px;
${color}
${space}
${border}
${shadow}
${layout}
${typography}
${hoverStyle}
`;

export default Input;

export const FormInput = ({
  required,
  label,
  rightButton,
  subButton,
  width,
  hover = true,
  ...props
}: InputProps) => (
  <Column width={width}>
    {label && (
      <Row justifyContent="space-between">
        {label && (
          <Row>
            <Text>{label}</Text>
            {required && (
              <Text color="red" ml="2">
                *
              </Text>
            )}
          </Row>
        )}
        {subButton}
      </Row>
    )}
    <Row style={{ position: 'relative' }}>
      <Input
        type="text"
        backgroundColor={transparentize(0.87, baseTheme.colors.grey)}
        borderColor={transparentize(0.93, baseTheme.colors.black)}
        borderRadius={1}
        fontSize={2}
        p={3}
        hover={hover}
        {...props}
      />
      {rightButton && (
        <Flex style={{ position: 'absolute', right: 0 }}>{rightButton}</Flex>
      )}
    </Row>
  </Column>
);

// Input style as a container - eg as Payment Input background
export const FormContainer = styled.div`
  width: 100%;
  transition: border 250ms ease-out;
  background-color: ${transparentize(0.87, baseTheme.colors.grey)};
  border: ${transparentize(0.93, baseTheme.colors.black)} 1px solid;
  padding: 16px;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: ${baseTheme.colors.blues.deepSky} 1px solid;
    outline: none;
  }
`;

export const Checkbox = ({ label, mx, my, ...props }: InputProps) => (
  <Row mx={mx} my={my}>
    <Input
      type="checkbox"
      backgroundColor={transparentize(0.87, baseTheme.colors.grey)}
      borderColor={transparentize(0.93, baseTheme.colors.black)}
      borderRadius={1}
      fontSize={2}
      width={3}
      height={3}
      css={css`
        &:hover {
          border: ${baseTheme.colors.black} 1px solid;
          outline: none;
        }
        &:checked {
          border: ${baseTheme.colors.white} 1px solid;
          background-color: ${baseTheme.colors.black};
        }
      `}
      {...props}
    />
    {label && <Text ml={2}>{label}</Text>}
  </Row>
);
