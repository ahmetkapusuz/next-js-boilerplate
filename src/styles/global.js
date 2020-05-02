import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Contrail+One&display=swap';

export const bodyStyles = css`
  /* global styles */
  * {
    font-family: 'Contrail One', cursive;
  }
`;

export const GlobalStyle = createGlobalStyle`
${normalize}

 body {
   ${bodyStyles}
 }
`;
