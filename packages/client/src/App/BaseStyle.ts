import { createGlobalStyle } from 'styled-components';

export const BaseStyle = createGlobalStyle`

    *,*::after,*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    html {
    font-size: 62.5%;
    }
    body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1;
    font-weight: 400;
    color: hsl(0, 0%, 41%);
    }

`;
