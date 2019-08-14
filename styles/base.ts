import { css } from '@emotion/core';
import {
  AppFontFamily,
  AppFontWeight,
  AppLineHeight,
  AppColor,
} from '../enums/AppStyles';

const base = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 62.5%; /* Set the font-size to 10px, which is adapted to rem unit */
    font-size: calc(
      1em * 0.625
    ); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
  }
  body {
    height: 100%;
    font-family: ${AppFontFamily.primary};
    font-size: 1.6rem;
    font-weight: ${AppFontWeight.regular};
    line-height: ${AppLineHeight.L};
    text-rendering: optimizeLegibility;
    color: ${AppColor.greyDDD};
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  button,
  textarea,
  select,
  input {
    &:focus {
      outline: none;
    }
  }
  /* Max values */
  img,
  table,
  td,
  blockquote,
  code,
  pre,
  textarea,
  input,
  video,
  svg {
    max-width: 100%;
  }
  img {
    height: auto;
  }
  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  p {
    margin: 0;
  }
  small {
    font-size: inherit;
  }
  abbr[title] {
    text-transform: lowercase;
  }
  abbr,
  acronym {
    cursor: help;
  }
  /* Links */
  a {
    color: ${AppColor.primary};
    transition: color 0.3s ease-in-out;
    &:active,
    &:hover,
    &:focus {
      color: ${AppColor.primaryD};
    }
    &:focus {
      outline: none;
    }
  }
  /* List */
  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  dl dd {
    margin: 0;
  }
  /* Embed */
  img {
    border-style: none;
    vertical-align: bottom;
  }
  iframe {
    border: 0;
  }
  .embedded {
    .iframeHidden {
      display: none;
    }
  }
  svg:not(:root) {
    overflow: hidden;
  }
  /* Form */
  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }
  input,
  select,
  textarea {
    display: block;
  }
  label {
    display: inline-block;
    cursor: pointer;
    abbr {
      display: none;
    }
  }
  textarea {
    resize: vertical;
  }
  [type='checkbox'],
  [type='radio'] {
    display: inline;
    appearance: none;
    &::-ms-check {
      display: none;
    }
  }
  [type='search'] {
    box-sizing: border-box;
  }
  select {
    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 ${AppColor.grey};
    }
  }
  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }
  ::placeholder {
    color: ${AppColor.greyLL};
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Other */
  hr {
    border: 0;
    border-top: 1px solid ${AppColor.grey};
    margin: 4rem 0;
  }
  /* Table */
  table {
    max-width: 100%;
    margin: 0;
    border-collapse: collapse;
  }
  tr,
  td,
  th {
    vertical-align: middle;
  }
  th {
    font-weight: inherit;
    text-align: left;
  }

  .noscroll {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default base;
