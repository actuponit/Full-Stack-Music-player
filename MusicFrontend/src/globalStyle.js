// globalStyles.js
import { css } from '@emotion/react';

const globalStyles = css`
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #FCFCFC;
  }
  
  body {
    background-color: #171719;
    min-height: 100vh;
  }
  
  .active * {
    color: #00FFFF;
  }

  
`;

export default globalStyles;
