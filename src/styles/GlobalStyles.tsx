import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily } from '@styles/utils';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 16px;
    font-family: ${getFontFamily('roboto')};
    background-color: ${getColor('mainBackground')};
    text-align: center;
    color: ${getColor('textColor')};
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
