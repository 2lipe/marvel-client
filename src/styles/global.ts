import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: auto;
    -webkit-text-stroke: 0.2px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.colors.lightBg};

      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}

  button {
    cursor: pointer;
  }
`;
