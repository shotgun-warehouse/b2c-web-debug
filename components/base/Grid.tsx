/** @jsx jsx */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
// @ts-ignore
import { grid, GridTemplateColumnsProps, layout } from 'styled-system';
import {
  GridAutoRowsProps,
  GridColumnGapProps,
  GridRowGapProps,
  space,
  SpaceProps,
  WidthProps,
} from 'styled-system';

const gridStyle = css`
  display: grid;
`;

type GridProps = GridTemplateColumnsProps &
  GridAutoRowsProps &
  GridColumnGapProps &
  GridRowGapProps &
  SpaceProps &
  WidthProps;
export const Grid = styled.div<GridProps>`
  ${gridStyle}
  ${grid}
  ${space}
  ${layout}
`;
