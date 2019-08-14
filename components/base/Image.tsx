/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
// @ts-ignore
import { layout } from 'styled-system';
import {
  space,
  MarginProps,
  WidthProps,
  border,
  BorderRadiusProps,
  DisplayProps,
} from 'styled-system';
import { Centered } from './Layout';

type ImageFilters = 'invert';
type ImageProps = MarginProps &
  WidthProps &
  BorderRadiusProps &
  DisplayProps & { filters?: ImageFilters[] } & React.HTMLAttributes<
    HTMLImageElement
  > &
  React.HTMLProps<HTMLImageElement>;

const invertFilter = ({ filters }: ImageProps) =>
  filters && filters.includes('invert')
    ? css`
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
      `
    : undefined;

const Image = styled.img<ImageProps>`
  ${space}
  ${border}
  ${layout}
  ${invertFilter}
`;

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;

export const RoundImage = ({
  size = 5,
  ...props
}: { size?: number } & ImageProps) => (
  <Centered
    width={size}
    height={size}
    borderRadius={size}
    style={{ overflow: 'hidden' }}
  >
    {/* 
    // @ts-ignore - FIXME styled-system broken width type */}
    <Image {...props} />
  </Centered>
);
