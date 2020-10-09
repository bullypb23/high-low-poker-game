import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export default Global;
