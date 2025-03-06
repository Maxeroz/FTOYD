import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-base-white: #fff;

    --color-black-strong: #0B0E12;
    --color-black-soft: #0F1318;

    --color-status-error-light: #EB0237;
    --color-status-error-base: #A01131;
    --color-status-error-dark: #701328;

    --color-status-success-base: #43AD28;

    --color-status-scheduled: #EB6402;

    --border-radius-small: 4px;

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
  }

  @font-face {
    font-family: 'Tactic Sans';
    src: url('./fonts/TacticSansExd-Reg.woff2') format('woff2'),
         url('./TacticSansExd-RegIt.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption, footer,
  header, hgroup, menu, nav, output, ruby, section,
  summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: "Inter", sans-serif;
    background-color: #06080c;
    color: #fff;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
