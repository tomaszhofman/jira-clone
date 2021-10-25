import { createGlobalStyle, css } from 'styled-components';

export const BaseStyle = createGlobalStyle`${css`
  :root {
    --topNavigationHeight: 5.6rem;
    --leftSidebarWidth: 57.5rem;
    --main-bg-color: pink;
  }
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.1rem rgba(76, 154, 255);
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1;
    font-weight: 400;
    color: hsl(0, 0%, 41%);
  }
`}`;
